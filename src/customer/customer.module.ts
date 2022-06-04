import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { CustomerController } from "./controller/customer.controller";
import { CustomerSchema } from "./schemas/customer.schema";
import { CustomerServices } from "./services/customer.services";

@Module({
    imports:[
        MongooseModule.forFeature([{ name:'Customer', schema: CustomerSchema}]),
        
    ],
    controllers:[CustomerController],
    providers:[CustomerServices]
})
export class CustomerModule{

}