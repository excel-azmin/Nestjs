import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class UserDto{
    @IsString()
    @IsEmail()
    @IsNotEmpty()
    email: string;
    @IsString()
    @IsNotEmpty()
    name: string;
}

export class UserEmailDto{
    @IsString()
    @IsEmail()
    @IsNotEmpty()
    email: string;
}