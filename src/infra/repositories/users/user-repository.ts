import { IUserRepository } from '../../../domain';
import { IDatabase } from '../../../globals';

export class UserRepository implements IUserRepository {
  model: any;

  constructor(database: IDatabase) {
    this.model = database.getModel('user');
  }

  async getAll(): Promise<any> {
    const users = await this.model.findAll({});

    return {
      data: users,
      total: users.length,
      offset: 0,
      limit: 10
    };
  }
}
