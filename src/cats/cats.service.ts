import { Injectable } from '@nestjs/common';
import { Cat } from './interfaces/cats';
import { CreateCatDto } from './dto/cat';

@Injectable()
export class CatsService {
  private id: number = 0;
  private readonly cats: Cat[] = [];

  create(catDto: CreateCatDto): void {
    const cat = { ...catDto, id: this.id++ };
    this.cats.push(cat);
  }

  findAll(): Cat[] {
    return this.cats;
  }

  getCat(id: Cat['id']): Cat {
    return this.cats.find(o => o.id === id) || null;
  }

}
