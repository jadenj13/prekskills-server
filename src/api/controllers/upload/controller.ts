import { Request, Response } from 'express';
import { uploadService } from '../../services';
import logger from '../../../common/logger';

class Controller {
  public getSignedUrl = async (req: Request, res: Response) => {
    const { filename, fileType } = req.query as {
      filename: string;
      fileType: string;
    };

    try {
      const response = await uploadService.getSignedUrl(filename, fileType);

      return res.json(response);
    } catch (error) {
      logger.error(error.stack);

      return res.status(500).send(error.message);
    }
  };
}

export default new Controller();
