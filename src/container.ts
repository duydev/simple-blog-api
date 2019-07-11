import { createContainer, asClass } from 'awilix';
import { Application } from './app';
import { Server } from './interfaces/http';
import { Database } from './infra/db';

const container = createContainer({
  injectionMode: 'CLASSIC'
});

container.register({
  application: asClass(Application).singleton(),
  server: asClass(Server).singleton(),
  database: asClass(Database).singleton()
});

export { container };
