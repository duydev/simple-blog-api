import { IApplication, IServer, IDatabase } from '../globals';

export class Application implements IApplication {
  constructor(private server: IServer, private database: IDatabase) {}

  async start(): Promise<any> {
    await this.database.boot();
    await this.server.start();
  }
}
