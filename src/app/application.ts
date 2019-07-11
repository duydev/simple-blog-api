export class Application implements IApplication {
  constructor(private server: IServer, private database: IDatabase) {}

  async start(): Promise<any> {
    await this.database.authenticate();
    await this.server.start();
  }
}
