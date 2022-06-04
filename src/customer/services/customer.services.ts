import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model} from "mongoose";
import { Customer } from "../interface/customer.interface";

@Injectable()
export class CustomerServices{
    constructor(@InjectModel('Customer') private readonly customerModel: Model<Customer>) { }

    public async allCustomer(): Promise<Customer []>{
        return this.customerModel.find();
    }

    public async getCustomer(id: string): Promise<Customer>{
        const data = this.customerModel.findById(id);
        if(data.error){
            throw new NotFoundException("Data Not Found")
        }
        return data;
    }

     async addCustomer(customer): Promise<Customer>{
        // const newCustomer = await  this.customerModel(customer);
       return await this.customerModel.create(customer);
    }

    public async updateCustomer(id, customer): Promise<Customer>{
        const data = await this.customerModel.findByIdAndUpdate(
            id, customer, 
            { new: true})
        if(!data){
            throw new NotFoundException("Data Not Found")
        }    
        return customer;
    }
    
    public async delete(id: string): Promise<Customer>{
        return await this.customerModel.findByIdAndRemove(id);
    }

}