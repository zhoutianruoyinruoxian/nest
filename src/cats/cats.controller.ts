import { Controller, Get, Post, Query, Req, Res, Body, UsePipes } from '@nestjs/common';
import { Request, Response } from 'express';
import { CatsService } from './cats.service';
import { CreateCatDto } from './dto/cat';
import { sendData } from '../utils/response';
import ValidatePipe from './dto/ValidatePipe';

function Modify() {
  return function b(target, propertyKey, descriptor) {
    console.log(target, propertyKey, descriptor, 'Modify');
  };
}

function Modi(target: CatController, propertyKey, index) {
  console.log(target, propertyKey, index, 'Modi');
  return target[propertyKey](222);
}

@Controller('cat')
export class CatController {
  constructor(private readonly catsService: CatsService) { }

  @Get('get')
  async getCat(@Query() query: Request['query']): Promise<any> {
    const { id } = query;
    if (id) {
      const cat = this.catsService.getCat(id);
      if (!cat) {
        return sendData(null, 500, `paramter 'id' is not available!`);
      }
      return sendData(cat);
    } else {
      return sendData(null, 500, `paramter 'id' is required but notfound!`);
    }
    // return this.appService.getHello();
  }

  @Post('create')
  @UsePipes(ValidatePipe)
  async setCat(@Body() createCatDto: CreateCatDto) {
    this.catsService.create(createCatDto);
    console.log(this.catsService.findAll(), 666);
    return sendData({}, 201, 'success!');
  }

  @Modify()
  @Get('test')
  test(@Modi a: any) {
    console.log(a, 'test222');
    return ('ok');
  }

}
