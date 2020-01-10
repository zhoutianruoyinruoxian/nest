import { Injectable } from '@nestjs/common';
import { Pool } from 'mysql';
import { pool } from './connect';

@Injectable()
export class CatDao {
  constructor(private readonly pool: Pool) {

  }

}
