import { NestFactory } from '@nestjs/core';
import * as cors from 'cors';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // CORS middleware
  app.use(cors({
    origin: 'http://localhost:8080',
    credentials: true,
  }));
  await app.listen(3000);
}
bootstrap();
