// src/main.ts
import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable CORS for requests from your frontend
  app.enableCors({
    origin: 'http://localhost:3000', // Adjust based on your frontend's actual port
  });

  // Use global validation pipes
  app.useGlobalPipes(new ValidationPipe());

  await app.listen(3001);
}
bootstrap();
