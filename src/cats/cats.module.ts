import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { CatController } from './cats.controller';
import { CatsService } from './cats.service';
import { LoggerMiddleware } from '../logger/logger.middleware';

@Module({
  imports: [],
  controllers: [CatController],
  providers: [CatsService],
})
export class CatsModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes(CatController);
  }
}
