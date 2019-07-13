import { IRouter, Config } from '../../globals';
import { Router } from 'express';
import bodyParser from 'body-parser';
import compression from 'compression';
import morgan from 'morgan';
import cors from 'cors';
import { ErrorHandler } from './middleware';
import statusMonitor from 'express-status-monitor';

export class RootRouter implements IRouter {
  router: Router;

  constructor(config: Config, errorHandler: ErrorHandler, userRouter: IRouter) {
    this.router = Router();

    this.router.use(bodyParser.json());
    this.router.use(cors());
    this.router.use(compression());
    this.router.use(morgan('dev'));

    if (config.env === 'development') {
      this.router.use(statusMonitor());
    }

    const apiRouter = Router();

    apiRouter.use('/user', userRouter.router);

    this.router.use(config.http.prefix, apiRouter);

    this.router.use(errorHandler.handle());
  }
}
