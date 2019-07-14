import { Router } from 'express';
import { IRouter, IControllerHandler } from '../../../../globals';

export class UserRouter implements IRouter {
  router: Router;
  controllerName = 'user';

  constructor(controllerHandler: IControllerHandler) {
    const router = Router();

    router.get(
      '/',
      controllerHandler.handle(this.controllerName, 'getAllUsers')
    );

    this.router = router;
  }
}
