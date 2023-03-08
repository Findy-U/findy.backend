import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(cookieParser());
  app.enableCors();
  app.setGlobalPrefix('api');
  app.useGlobalPipes(new ValidationPipe());

  const configSevice = app.get(ConfigService);

  await app.listen(configSevice.get('port'));
  console.log(
    `Application is running on: http://localhost:${configSevice.get('port')}`,
  );
}
bootstrap();
