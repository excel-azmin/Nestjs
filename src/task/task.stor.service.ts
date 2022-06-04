import { Injectable, NotFoundException } from "@nestjs/common";
import { Task } from "./interface/task.interface";

@Injectable()
export class TaskStoreService{
    
    private tasks: Task[] = [];

    public async addTask(task: Task): Promise<Task>{
        this.tasks.push(task);
        return task;
    }

    public async getTask(id: string):Promise<Task>{
        const task = this.tasks.filter((i: Task) => i.uuid == id);
        return task[0];
    }

    public async getAllTasks(): Promise<Task []>{
        if(this.tasks.length==0){
            console.log("not foune");
            throw new NotFoundException("No Data Available at the moment")
        }
        return this.tasks;
        
    }

    public async getFilter(id, name): Promise<Task []>{
        const data = this.tasks.filter((i: Task) => i.name == id && i.name == name)
        if(data){
            return data;
        }else
        {
            throw new NotFoundException("Data are not available")
        }
        
    }

}