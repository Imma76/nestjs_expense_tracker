import {
  Body,
  Controller,
  HttpException,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UserDTO } from 'src/dto/user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  @Post('create')
  @UsePipes(new ValidationPipe())
  async createUser(@Body() userDTO: UserDTO) {
    const saltOrRounds = 10;
    const password = userDTO.password;
    const hash = await bcrypt.hash(password, saltOrRounds);
    userDTO.password = hash;
    const newUser = await this.userService.create(userDTO);
    newUser.password = undefined;
    return {
      status: true,
      message: 'User created successfully',
      data: newUser,
    };
  }
  @Post('login')
  @UsePipes(new ValidationPipe())
  async logIn(@Body() logInDTO: UserDTO) {
    const user = await this.userService.login(logInDTO);
    if (!user) {
      return {
        status: false,
        message: 'User not found',
      };
    }
    const isMatch = await bcrypt.compare(logInDTO.password, user.password);
    // const check = compareSync(logInDTO.password, user.password);

    if (!isMatch) {
      throw new HttpException('Invalid credentials', 400);
    }
    user.password = undefined;
    const token = await this.jwtService.signAsync(
      { email: user.email, userName: user.username },
      { privateKey: process.env.privateKey, secret: process.env.salt },
    );
    return { status: true, token: token, data: user };
  }
}
