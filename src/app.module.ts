import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user-moduls/user.controller';
import { UserService } from './user-moduls/user.service';
import { TaskModule } from './task/task.module';

@Module({
  imports: [TaskModule],
  controllers: [AppController,UserController],
  providers: [AppService, UserService],
})
export class AppModule {}
