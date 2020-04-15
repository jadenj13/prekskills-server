import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import { User, UserDocument } from '../../db/models';
import config from '../../common/config';

class AuthService {
  private generateToken = (user: UserDocument) => {
    const payload = {
      name: user.name,
      role: user.role,
      userId: user._id.toString(),
    };

    const token = jwt.sign(payload, config.jwtSecret);

    return token;
  };

  public login = async (email: string, password: string) => {
    const user = await User.findOne({ email });

    if (!user) {
      throw new Error('No user found with email.');
    }

    const matchedPassword = await bcrypt.compare(password, user.password);

    if (!matchedPassword) {
      throw new Error('Incorrect password.');
    }

    const token = this.generateToken(user);

    return token;
  };

  public register = async (email: string, password: string, name: string) => {
    const encryptedPassword = await bcrypt.hash(password, 10);

    const user = new User({
      name,
      email,
      password: encryptedPassword,
      role: 'user',
    });

    await user.save();

    const token = this.generateToken(user);

    return token;
  };
}

export default new AuthService();
