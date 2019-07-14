import { IDatabase, Config, ILoggerFactory, Logger } from '../../globals';
import { Sequelize } from 'sequelize';
import path from 'path';
import fs from 'fs';

export class Database implements IDatabase {
  private sequelize: Sequelize;
  models: any;

  constructor(config: Config, private logger: Logger) {
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

    this.models = {};
  }

  async boot(): Promise<void> {
    await this.authenticate();
    await this.initModels();
  }

  private async authenticate(): Promise<void> {
    await this.sequelize.authenticate();

    const dbConfig = this.sequelize.config;
    this.logger.info(
      `Database connected //${dbConfig.username}@${dbConfig.host}:${
        dbConfig.port
      }/${dbConfig.database}`
    );
  }

  private async initModels(): Promise<void> {
    const modelsPath = path.join(__dirname, 'models');

    fs.readdirSync(modelsPath)
      .filter(file => file.indexOf('.') !== 0 && file.slice(-3) === '.ts')
      .forEach(file => {
        const model = this.sequelize.import(path.join(modelsPath, file));
        this.models[model.name] = model;
      });

    Object.keys(this.models).forEach(modelName => {
      if (this.models[modelName].associate) {
        this.models[modelName].associate(this.models[modelName]);
      }
    });
  }

  getModel(modelName: string): any {
    if (!this.models[modelName]) {
      throw Error(`Model ${modelName} is not support.`);
    }

    return this.models[modelName];
  }
}
