import { RequestHandler, Response, NextFunction } from 'express';
import { IControllerHandler, IRequest, Logger } from '../../../globals';

export class ControllerHandler implements IControllerHandler {
  constructor(private logger: Logger) {}

  handle(controllerName: string, methodName: string): RequestHandler {
    return async (req: IRequest, res: Response, next: NextFunction) => {
      try {
        const controller = req.container.resolve(`${controllerName}Controller`);
        const result = await controller[methodName](req);

        res.status(200).json(result);
      } catch (err) {
        this.logger.error(err);

        next(err);
      }
    };
  }
}
