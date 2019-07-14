import { Config } from '../globals';

export const config: Config = {
  env: process.env.NODE_ENV || 'development',
  http: {
    port: Number(process.env.PORT) || 3000,
    prefix: '/api'
  },
  logging: {
    path: process.env.LOGGING_PATH || 'logs/',
    level: process.env.LOGGING_LEVEL || 'info'
  },
  database: {
    host: process.env.DB_HOST || 'localhost',
    port: Number(process.env.DB_PORT) || 5432,
    user: process.env.DB_USER || 'postgres',
    pass: process.env.DB_PASS || 'postgres',
    name: process.env.DB_NAME || 'simple_blog'
  }
};
