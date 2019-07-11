interface IApplication {
  start(): Promise<void>;
}

interface IServer {
  start(): Promise<void>;
}

interface IDatabase {
  authenticate(): Promise<void>;
}
