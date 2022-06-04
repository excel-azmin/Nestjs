import { BadGatewayException, Body, Controller, Delete, Get, HttpStatus, Param, Post, Req, Res, UseFilters, UseGuards, UseInterceptors, UsePipes, ValidationPipe } from "@nestjs/common";
import { UserService } from "./user.service";
import { User } from "./interface/User";
import { UserDto, UserEmailDto } from "./dto/user.dto";
import { Request, Response } from "express";
import { HttpExceptionFilter } from "./filter/user.filter";
import { AuthGuard } from "./guard/user.guard";
import { LoggingInterceptor } from "./interceptor/user.interceptor";

@Controller('user')
export class UserController{
    constructor(private userService: UserService){}

    @UseInterceptors(new LoggingInterceptor())
    @Get('/')
    getAllUsers(): User[]{
        return this.userService.getAllUser();
    }

    @Get('/:email')
    @UseFilters(new HttpExceptionFilter())
    @UsePipes(new ValidationPipe())
     async getUser(@Param('email') data: UserEmailDto): Promise<User>{
         try{
            return await this.userService.getUser(data.email)
         }catch(err){
             throw new BadGatewayException('test')
         }
      
    }

    @Post('add')
    @UseGuards(AuthGuard)
    @UsePipes(new ValidationPipe())
    async addUser(@Body() user : UserDto, @Req() req: Request, @Res() res : Response) : Promise<User>{
    //    console.log();
       const result = this.userService.addUser(user);
       let r = res.status(HttpStatus.CREATED).json([])
      return await this.userService.addUser(user);
    }

    @Delete('/:delete')
    @UsePipes(new ValidationPipe())
    deleteUser(@Param() data: UserEmailDto): User[]{
        return this.userService.deleteUser(data.email);

    }

}