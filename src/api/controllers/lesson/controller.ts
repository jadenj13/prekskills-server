import { Request, Response } from 'express';
import { lessonService } from '../../services';
import logger from '../../../common/logger';

class Controller {
  public create = async (req: Request, res: Response) => {
    try {
      const lesson = await lessonService.create(req.body);

      return res.json(lesson);
    } catch (error) {
      logger.error(error.stack);

      return res.status(500).send(error.message);
    }
  };

  public update = async (req: Request, res: Response) => {
    try {
      const lesson = await lessonService.update(req.params.id, req.body);

      return res.json(lesson);
    } catch (error) {
      logger.error(error.stack);

      return res.status(500).send(error.message);
    }
  };
}

export default new Controller();
