import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { createDocument } from './swagger/swagger';
import { HttpExceptionFilter } from './user-moduls/filter/user.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      transform:true
    })
  );
  app.setGlobalPrefix('api/v1');
  SwaggerModule.setup('api', app, createDocument(app))
  // app.use(new Logger);
  // app.useGlobalFilters(new HttpExceptionFilter()) // apply filte globally .. 
  await app.listen(3000);

}
bootstrap();
