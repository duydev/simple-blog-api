import { container } from './container';
import { Logger, IApplication } from './globals';

container
  .resolve<IApplication>('app')
  .start()
  .catch((err: Error) => {
    const logger = container.resolve<Logger>('logger');
    logger.error(err);
  });
