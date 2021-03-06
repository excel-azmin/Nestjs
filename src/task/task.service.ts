import { Injectable } from "@nestjs/common";
import { randomUUID } from "crypto";
import { Task } from "./interface/task.interface";
import { TaskStoreService } from "./task.stor.service";

@Injectable()
export class TaskService{

    constructor(private readonly taskStoreService: TaskStoreService){}

    public async addTask(task: Task):Promise<Task>{
        task.uuid = randomUUID();
        task.date = new Date();
        return this.taskStoreService.addTask(task);
    }

    public async getTask(id: string): Promise<Task>{
        return this.taskStoreService.getTask(id);
    }

    public async getAllTask(): Promise<Task []>{
        return this.taskStoreService.getAllTasks();
    }
    public async getFilter(id, name): Promise<Task []>{
        return this.taskStoreService.getFilter(id,name);
    }


}


