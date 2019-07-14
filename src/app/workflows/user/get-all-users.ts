import { IUserRepository } from '../../../domain';

export class GetAllUsersWorkflow {
  constructor(private userRepository: IUserRepository) {}

  async execute() {
    const result = await this.userRepository.getAll();

    return result;
  }
}
