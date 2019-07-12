import { Config } from '../globals';

export const config: Config = {
  env: process.env.NODE_ENV || 'development',
  http: {
    port: Number(process.env.PORT) || 3000
  },
  logging: {
    path: process.env.LOGGING_PATH || 'logs/',
    level: process.env.LOGGING_LEVEL || 'debug'
  }
};
