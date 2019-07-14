import {
  IRouter,
  Config,
  IErrorHandler,
  INotFoundHandler
} from '../../globals';
import { Router } from 'express';
import bodyParser from 'body-parser';
import compression from 'compression';
import morgan from 'morgan';
import cors from 'cors';
import statusMonitor from 'express-status-monitor';
import { scopePerRequest } from 'awilix-express';
import { container } from '../../container';

export class RootRouter implements IRouter {
  router: Router;

  constructor(
    config: Config,
    errorHandler: IErrorHandler,
    notFoundHandler: INotFoundHandler,
    userRouter: IRouter
  ) {
    const router = Router();

    router.use(bodyParser.json());
    router.use(cors());
    router.use(compression());
    router.use(morgan('dev'));

    if (config.env === 'development') {
      router.use(statusMonitor());
    }

    router.use(scopePerRequest(container));

    const apiRouter = Router();

    apiRouter.use('/users', userRouter.router);

    router.use(config.http.prefix, apiRouter);

    router.use(notFoundHandler.handle());

    router.use(errorHandler.handle());

    this.router = router;
  }
}
