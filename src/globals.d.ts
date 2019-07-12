import winston = require('winston');

export interface IApplication {
  start(): Promise<void>;
}

export interface IServer {
  start(): Promise<void>;
}

export interface IDatabase {
  authenticate(): Promise<void>;
}

export type Config = {
  env?: string;
  http?: {
    port?: number;
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
