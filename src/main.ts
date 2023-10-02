// import { ConfigService } from '@nestjs/config';
import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as appInsights from 'applicationinsights';
import * as cookieParser from 'cookie-parser';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(cookieParser());
  app.enableCors();
  app.setGlobalPrefix('api');
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // Habilita a funcionalidade de whitelist
      forbidNonWhitelisted: true, // Impede que propriedades não permitidas sejam enviadas
    }),
  );

  appInsights.setup(process.env.APPLICATIONINSIGHTS_CONNECTION_STRING).start();

  const PORT = parseInt(process.env.PORT) || 3001;

  const config = new DocumentBuilder()
    .addBearerAuth()
    .setTitle('Findy API')
    .setDescription(
      'API gerenciamento de candidatos voluntários e projetos voluntários.',
    )
    .setVersion('0.0.1')
    .addTag('authentication')
    .addTag('candidate_users')
    .addTag('candidate_profile')
    .addTag('candidate_projects')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  await app.listen(PORT || 3001);

  if (PORT === 3001) {
    console.log(`🚀 Application is running on: http://localhost:${PORT}/api`);
  }
}

bootstrap();
