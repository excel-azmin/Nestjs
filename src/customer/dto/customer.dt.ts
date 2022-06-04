import { IsEmail, IsNotEmpty, IsString, IsUUID } from "class-validator"

export class CustomerDto{
    @IsString()
    @IsNotEmpty()
    first_name: string;
    @IsString()
    @IsNotEmpty()
    last_name: string;
    @IsString()
    @IsEmail()
    email: string;
    @IsString()
    @IsNotEmpty()
    phone: string;
}

export class CustomerUpdateIdDto{
    @IsUUID()
    @IsNotEmpty()
    id: string;
}