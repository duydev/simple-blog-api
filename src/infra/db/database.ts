import { IDatabase, Config, ILoggerFactory, Logger } from '../../globals';
import { Sequelize } from 'sequelize';

export class Database implements IDatabase {
  private logger: Logger;
  private sequelize: Sequelize;

  constructor(config: Config, loggerFactory: ILoggerFactory) {
    this.logger = loggerFactory.create('app');

    const dbConfig = config.database;

    this.sequelize = new Sequelize({
      host: dbConfig.host,
      port: dbConfig.port,
      username: dbConfig.user,
      password: dbConfig.pass,
      database: dbConfig.name,
      logging: (sql: string, timing?: number) => {
        this.logger.debug(sql, timing);
      },
      dialect: 'postgres'
    });
  }

  async authenticate(): Promise<void> {
    await this.sequelize.authenticate();

    const dbConfig = this.sequelize.config;
    this.logger.info(
      `Database connected //${dbConfig.username}@${dbConfig.host}:${
        dbConfig.port
      }/${dbConfig.database}`
    );
  }
}
