import { User } from '../../db/models';

class UserService {
  public getUser = async (userId: string) => {
    const user = await User.findById(userId);

    return user;
  };
}

export default new UserService();
