import { IRequest } from '../../../../globals';
import { GetAllUsersWorkflow } from '../../../../app/workflows/user';

export class UserController {
  getAllUsers({ container }: IRequest) {
    const workflow = container.resolve<GetAllUsersWorkflow>('getAllUsers');
    return workflow.execute();
  }
}
