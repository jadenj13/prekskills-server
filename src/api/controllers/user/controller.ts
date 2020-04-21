import { Request, Response } from 'express';
import { authService, userService } from '../../services';
import logger from '../../../common/logger';

class Controller {
  public getCurrentUser = async (req: Request, res: Response) => {
    const { userId } = req.user;

    try {
      const user = await userService.getById(userId);

      return res.send({ user });
    } catch (error) {
      logger.error(error.stack);

      return res.status(401).send(error.message);
    }
  };

  public register = async (req: Request, res: Response) => {
    const { name, email, password } = req.body as {
      name: string;
      email: string;
      password: string;
    };

    try {
      const token = await authService.register(email, password, name);

      return res.send({ token });
    } catch (error) {
      logger.error(error.stack);

      return res.status(500).send(error.message);
    }
  };

  public login = async (req: Request, res: Response) => {
    const { email, password } = req.body as { email: string; password: string };

    try {
      const token = await authService.login(email, password);

      return res.send({ token });
    } catch (error) {
      return res.status(401).send(error.message);
    }
  };
}

export default new Controller();
