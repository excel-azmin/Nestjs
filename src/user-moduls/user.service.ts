import { Injectable, NotFoundException } from "@nestjs/common";
import { User } from "./interface/User";

@Injectable()
export class UserService{

    public users: User[] = [];

    getAllUser(): User[]{
        return this.users;
    }


    async addUser(user: any): Promise<User>{
        this.users.push(user);
        // console.log(this.users);
        return Promise.resolve(user);
    }

    async getUser(email: string): Promise<User>{
        const fondedUser = this.users.filter(i => i.email === email)[0];
        if(fondedUser && Array.isArray(fondedUser) && fondedUser.length > 0){
            return Promise.resolve(fondedUser[0]);
        }
        throw new NotFoundException("User mail not found");
    }

    deleteUser(email: string): User[]{
        const remaiUser = this.users.filter(i => i.email !== email)
        return remaiUser;
    }

    // updateUser(email: string){
    //     const 
    // }


}