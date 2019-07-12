import { container } from './container';
import { IApplication } from './globals';
import { LoggerFactory } from './infra/logging/logger-factory';

const logger = container.resolve<LoggerFactory>('loggerFactory').create('app');

container
  .resolve<IApplication>('application')
  .start()
  .catch((err: Error) => {
    logger.error(err);
  });
