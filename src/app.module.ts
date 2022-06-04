import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user-moduls/user.controller';
import { UserService } from './user-moduls/user.service';
import { TaskModule } from './task/task.module';
import { DataBaseModule } from './database/database.module';
import { CustomerModule } from './customer/customer.module';

@Module({
  imports: [TaskModule, DataBaseModule, CustomerModule],
  controllers: [AppController,UserController],
  providers: [AppService, UserService],
})
export class AppModule {}
