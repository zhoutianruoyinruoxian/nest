import { Controller, Get, Post, Query, Res, HttpCode } from '@nestjs/common';
import { Request, Response } from 'express';
import { AppService } from './app.service';

@Controller('cat')
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get('get')
  getCat(@Query() query: Request['query'], @Res() res: Response) {
    const { id } = query;
    if (id) {
      return res.send(`get cat number:${id}!`);
    } else {
      return res.status(500).send(`paramter 'id' is required but notfound!`);
    }
    // return this.appService.getHello();
  }

  @Post('create')
  @HttpCode(200)
  setCat() {
    return this.appService.getHello();
  }

}
