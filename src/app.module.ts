import { Module } from '@nestjs/common';
import { APP_PIPE } from '@nestjs/core';
import { CatsModule } from './cats/cats.module';
import ValidationPipe from './utils/ValidationPipe';

@Module({
  imports: [CatsModule],
  providers: [
    {
      provide: APP_PIPE,
      useClass: ValidationPipe,
    },
  ],
})
export class AppModule { }
