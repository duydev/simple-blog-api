import { container } from './container';

container
  .resolve<IApplication>('application')
  .start()
  .catch((err: Error) => {
    console.log(`ERROR: ${err.stack}`);
  });
