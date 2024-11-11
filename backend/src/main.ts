import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors(); // Allow CORS for development
  await app.listen(3001); // Set backend to run on port 3001
}
bootstrap();
