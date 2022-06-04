import { IsNotEmpty, IsNumber, IsString, IsUUID } from "class-validator";

export class TaskDto{

    @IsString()
    @IsNotEmpty()
    name: string;
    @IsString()
    @IsNotEmpty()
    desc: string;
    @IsString()
    @IsNotEmpty()
    priority: string;   
}

export class TaskParamDto{

    @IsString()
    @IsNotEmpty()
    @IsUUID()
    uuid : string;

}

export class FilterDto{
    @IsString()
    @IsNotEmpty()
    @IsUUID()
    uuid : string; 
    @IsString()
    @IsNotEmpty()
    name: string;
}