import winston = require('winston');
import { Router, RequestHandler, Request } from 'express';
import { AwilixContainer } from 'awilix';
import { ErrorRequestHandler } from 'express-serve-static-core';

export interface IApplication {
  start(): Promise<void>;
}

export interface IServer {
  start(): Promise<void>;
}

export interface IDatabase {
  models: any;
  boot(): Promise<void>;
  getModel(modelName: string): any;
}

export type Config = {
  env?: string;
  http?: {
    port?: number;
    prefix?: string;
  };
  logging?: {
    level?: string;
    path?: string;
  };
  database?: {
    host?: string;
    port?: number;
    user?: string;
    pass?: string;
    name: string;
  };
};

export type Logger = winston.Logger;

export interface ILoggerFactory {
  create(namespace: string): Logger;
}

export interface IRouter {
  router: Router;
}

export interface IErrorHandler {
  handle(): ErrorRequestHandler;
}

export interface IControllerHandler {
  handle(controllerName: string, methodName: string): RequestHandler;
}

export interface INotFoundHandler {
  handle(): RequestHandler;
}

export interface IRequest extends Request {
  container: AwilixContainer;
}

export interface IError extends Error {
  httpCode: number;
}
