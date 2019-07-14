import { createContainer, asClass, asValue } from 'awilix';

import { Application, config } from './app';

import { Server } from './interfaces/http';
import { Database } from './infra/db';
import { LoggerFactory } from './infra/logging';
import { RootRouter } from './interfaces/http/router';
import {
  ErrorHandler,
  ControllerHandler,
  NotFoundHandler
} from './interfaces/http/middleware';
import { UserRouter } from './interfaces/http/api/user/user-router';
import { UserController } from './interfaces/http/api/user/user-controller';
import { GetAllUsersWorkflow } from './app/workflows/user';
import { UserRepository } from './infra/repositories/users/user-repository';

const container = createContainer({
  injectionMode: 'CLASSIC'
});

const logger = new LoggerFactory(config).create('app');

// core system
container
  .register({
    app: asClass(Application).singleton(),
    server: asClass(Server).singleton(),
    router: asClass(RootRouter).singleton()
  })
  .register({
    config: asValue(config),
    logger: asValue(logger)
  });

// database
container.register({
  database: asClass(Database).singleton()
});

// http middleware
container.register({
  controllerHandler: asClass(ControllerHandler).singleton(),
  errorHandler: asClass(ErrorHandler).singleton(),
  notFoundHandler: asClass(NotFoundHandler).singleton()
});

// workflows
container.register({
  getAllUsers: asClass(GetAllUsersWorkflow).singleton()
});

// domains
container.register({
  userRouter: asClass(UserRouter).singleton(),
  userController: asClass(UserController).singleton()
});

// repositories
container.register({
  userRepository: asClass(UserRepository).singleton()
});

export { container };
