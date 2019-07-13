import { createContainer, asClass, asValue } from 'awilix';
import { Application, config } from './app';
import { Server } from './interfaces/http';
import { Database } from './infra/db';
import { LoggerFactory } from './infra/logging';
import { RootRouter } from './interfaces/http/router';
import { ErrorHandler } from './interfaces/http/middleware';
import { UserRouter } from './interfaces/http/api/user/user-router';

const container = createContainer({
  injectionMode: 'CLASSIC'
});

container.register({
  application: asClass(Application).singleton(),
  server: asClass(Server).singleton(),
  database: asClass(Database).singleton(),
  config: asValue(config),
  loggerFactory: asClass(LoggerFactory).singleton(),
  rootRouter: asClass(RootRouter).singleton(),
  errorHandler: asClass(ErrorHandler).singleton(),
  userRouter: asClass(UserRouter).singleton()
});

export { container };
