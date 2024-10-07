import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class UserDTO {
    @IsNotEmpty()
    @IsEmail()
    email: string;
    @IsNotEmpty()
    password: string;
    @IsNotEmpty()
    @IsString()
    username: string;
}

