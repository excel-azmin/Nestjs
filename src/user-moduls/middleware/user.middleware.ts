import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class UserMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log('Request...',req);

    // here we can apply condition & check request 
     // if evertythin is okay then call next function
    next();
    // if is there any problem we can directly send response from here with exceptions
    
  }
}
