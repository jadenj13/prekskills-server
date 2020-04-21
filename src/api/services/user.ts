import CrudService from './crud';
import { User, UserDocument } from '../../db/models';

class UserService extends CrudService<UserDocument> {
  Model = User;
}

export default new UserService();
