import { MiddlewareConsumer, Module, NestModule, RequestMethod } from "@nestjs/common";
import { UserMiddleware } from "./middleware/user.middleware";
import { UserController } from "./user.controller";
import { UserService } from "./user.service";

@Module({
    imports:[],
    controllers: [UserController],
    providers: [UserService]
})
export class UserModule implements NestModule{
    configure(consumer: MiddlewareConsumer){
        consumer
        .apply(UserMiddleware)
        .exclude(
            {path: 'user', method: RequestMethod.GET},
            {path: 'user', method: RequestMethod.POST}
            )
        .forRoutes(UserController)
    }

}