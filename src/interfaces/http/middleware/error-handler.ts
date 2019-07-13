import { Request, Response, NextFunction, ErrorRequestHandler } from 'express';

export class ErrorHandler {
  handle(): ErrorRequestHandler {
    return (err: Error, req: Request, res: Response, next: NextFunction) => {
      res.status(500).json({
        message: 'Internal Server Error'
      });
    };
  }
}
