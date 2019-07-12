import winston, { format } from 'winston';
import { Logger, Config, ILoggerFactory } from '../../globals';
import { defaultFormat } from './logger-format-helper';

export class LoggerFactory implements ILoggerFactory {
  constructor(private config: Config) {}

  create(namespace: string): Logger {
    const env = this.config.env;
    const logFolder = this.config.logging.path || 'logs/';

    const logger = winston.createLogger({
      level: this.config.logging.level,
      exitOnError: false,
      transports: [
        new winston.transports.Console({
          format: defaultFormat(namespace, true)
        }),
        new winston.transports.File({
          level: 'error',
          filename: `${logFolder}app-errors-${env}.log`,
          format: defaultFormat(namespace)
        })
      ]
    });

    // override error method to display error object
    logger['error'] = (message: any, ...meta: any[]) =>
      logger.log('error', message, meta);

    return logger;
  }
}
