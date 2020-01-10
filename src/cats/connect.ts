import { createPool } from 'mysql';
import mysqlConfig from 'src/config/mysql.config';

export const pool = createPool({
  ...mysqlConfig,
  database: 'cat',
});
