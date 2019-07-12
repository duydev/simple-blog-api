import { createContainer, asClass, asValue } from 'awilix';
import { Application, config } from './app';
import { Server } from './interfaces/http';
import { Database } from './infra/db';
import { LoggerFactory } from './infra/logging';
import { RootRouter } from './interfaces/http/router';

const container = createContainer({
  injectionMode: 'CLASSIC'
});

container.register({
  application: asClass(Application).singleton(),
  server: asClass(Server).singleton(),
  database: asClass(Database).singleton(),
  config: asValue(config),
  loggerFactory: asClass(LoggerFactory).singleton(),
  rootRouter: asClass(RootRouter).singleton()
});

export { container };
