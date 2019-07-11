import express, { Express } from 'express';

export class Server implements IServer {
  app: Express;

  constructor() {
    this.app = express();
  }

  async start(): Promise<void> {
    const http = this.app.listen(3000, () => {
      const { port } = http.address() as any;
      console.log(`[process ${process.pid}] API stated on port ${port}`);
    });
  }
}
