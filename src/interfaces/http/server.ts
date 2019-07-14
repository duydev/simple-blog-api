import express, { Express } from 'express';
import { IServer, Config, Logger, IRouter } from '../../globals';
import helmet from 'helmet';

export class Server implements IServer {
  app: Express;

  constructor(private config: Config, private logger: Logger, router: IRouter) {
    const app = express();

    app.use(helmet());
    app.use(router.router);

    this.app = app;
  }

  async start(): Promise<void> {
    const http = this.app.listen(this.config.http.port || 3000, () => {
      const { port } = http.address() as { port: number };
      this.logger.info(`[process ${process.pid}] API started on port ${port}`);
    });
  }
}
