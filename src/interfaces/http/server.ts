import express, { Express } from 'express';
import { IServer, Config, ILoggerFactory, Logger } from '../../globals';

export class Server implements IServer {
  app: Express;
  port: number;
  logger: Logger;

  constructor(config: Config, loggerFactory: ILoggerFactory) {
    this.app = express();
    this.port = config.http.port;
    this.logger = loggerFactory.create('app');
  }

  async start(): Promise<void> {
    const http = this.app.listen(this.port, () => {
      const { port } = http.address() as any;
      this.logger.info(`[process ${process.pid}] API started on port ${port}`);
    });
  }
}
