import { Body, Controller, Get, HttpStatus, Param, Post, Put, Query, Req, Res, UsePipes, ValidationPipe } from "@nestjs/common";
import { Response, Request } from "express";
import { CustomerDto, CustomerUpdateIdDto } from "../dto/customer.dt";
import { CustomerServices } from "../services/customer.services";

@Controller('customer')
export class CustomerController{
    constructor(private readonly customerServices: CustomerServices){}

    @Get()
    async getAllCustomer(@Res() res){
        const data = await this.customerServices.allCustomer();
        return res.status(HttpStatus.OK).json(data);
    }


    @Get('/:id')
    async getCustomer(@Res() res, @Param('id') id: string){
        const data = await this.customerServices.getCustomer(id);
        return res.status(HttpStatus.OK).json({
            message:'found',
            data
        });

    }

    @Post('')
    @UsePipes(new ValidationPipe)
    async addCustomer(@Res() res: Response, @Body() customerDto: CustomerDto){
        const data = await this.customerServices.addCustomer(customerDto);
        return res.status(HttpStatus.OK).json({
            message:"successfully",
            data
        });
    }

    @Put('/:id')
    async updateCustomer(@Res() res: Response, @Req() req: Request, @Param('id') id: CustomerUpdateIdDto){
        const data = await this.customerServices.updateCustomer(id, req.body);
        return res.status(HttpStatus.OK).json({
            message:"successfully",
            data
        });
    }

    

}