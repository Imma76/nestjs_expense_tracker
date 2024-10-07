import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserDTO } from 'src/dto/user.dto';
import { User } from 'src/schema/user.schema';

@Injectable()
export class UserService {
    constructor(@InjectModel(User.name) private userModel: Model<User>) { }

    create(user: UserDTO) {
        return this.userModel.create(user);
    }
    login(user: UserDTO) {
        return this.userModel.findOne({ email: user.email });
    }
}
