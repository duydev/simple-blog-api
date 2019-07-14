import { Response, NextFunction, ErrorRequestHandler } from 'express';
import { IRequest, IError, IErrorHandler } from '../../../globals';

export class ErrorHandler implements IErrorHandler {
  handle(): ErrorRequestHandler {
    return (err: IError, req: IRequest, res: Response, next: NextFunction) => {
      res.status(err.httpCode || 500).json({
        message: err.message || 'Internal Server Error'
      });
    };
  }
}
