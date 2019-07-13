import express, { Express } from 'express';
import {
  IServer,
  Config,
  ILoggerFactory,
  Logger,
  IRouter
} from '../../globals';
import helmet from 'helmet';

export class Server implements IServer {
  app: Express;
  port: number;
  logger: Logger;

  constructor(
    config: Config,
    loggerFactory: ILoggerFactory,
    rootRouter: IRouter
  ) {
    this.logger = loggerFactory.create('app');
    this.port = config.http.port;

    this.app = express();
    this.app.use(helmet());
    this.app.use(rootRouter.router);
  }

  async start(): Promise<void> {
    const http = this.app.listen(this.port, () => {
      const { port } = http.address() as any;
      this.logger.info(`[process ${process.pid}] API started on port ${port}`);
    });
  }
}
