import { Module } from '@nestjs/common';
import { CatController } from './cats.controller';
import { CatsService } from './cats.service';

@Module({
  imports: [],
  controllers: [CatController],
  providers: [CatsService],
})
export class CatsModule { }
