import { IRouter } from '../../globals';
import { Router } from 'express';
import bodyParser from 'body-parser';
import compression from 'compression';
import morgan from 'morgan';

export class RootRouter implements IRouter {
  router: Router;

  constructor() {
    this.router = Router();

    this.router.use(bodyParser.json());
    this.router.use(compression());
    this.router.use(morgan('dev'));
  }
}
