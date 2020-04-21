import * as express from 'express';
import controller from './controller';
import allowedRoles from '../../middleware/allowedRoles';

export default express
  .Router()
  .get('/', allowedRoles(['admin']), controller.getSignedUrl);
