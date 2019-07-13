import { Router } from 'express';
import { IRouter } from '../../../../globals';

export class UserRouter implements IRouter {
  router: Router;

  constructor() {
    this.router = Router();
  }
}
