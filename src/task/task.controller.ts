import { Body, Controller, Get, Param, Post, Query, Req, Res, UsePipes, ValidationPipe } from "@nestjs/common";
import { Task } from "./interface/task.interface";
import { TaskService } from "./task.service";
import { Response, Request } from "express";
import { FilterDto, TaskDto, TaskParamDto } from "./dto/task.dto";

@Controller('task')
export class TaskController{

    constructor(private readonly taskService: TaskService){}

    @Get('')
    async getAllTask(@Res() res: Response){
        const data = await this.taskService.getAllTask();
        console.log(data);
        
        return res.status(200).send(data);
    }

    @Get(':uuid')
    async getTask(@Param() reqParam: TaskParamDto){
        const data = await this.taskService.getTask(reqParam.uuid);
        return data;
    }

    @Post('')
    @UsePipes(new ValidationPipe())
    async addTask(@Body() task: TaskDto, res: Response){
        const data =  await this.taskService.addTask(task);
        console.log(data);
        return data;
    }

    @Get('/filter')
    @UsePipes(new ValidationPipe())
    async dataFilter(@Query() filterDto : FilterDto, @Res() res: Response){
        console.log(filterDto);
        return  await this.taskService.getFilter(filterDto.uuid, filterDto.name);
    }




}