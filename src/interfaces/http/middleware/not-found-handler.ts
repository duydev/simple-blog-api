import { RequestHandler, Response, NextFunction } from 'express';
import { IRequest, INotFoundHandler } from '../../../globals';

export class NotFoundHandler implements INotFoundHandler {
  handle(): RequestHandler {
    return (req: IRequest, res: Response, next: NextFunction) =>
      res.status(404).json({ message: 'API not found.' });
  }
}
