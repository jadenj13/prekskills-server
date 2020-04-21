import * as express from 'express';
import controller from './controller';
import allowedRoles from '../../middleware/allowedRoles';

export default express
  .Router()
  .post('/', allowedRoles(['admin']), controller.create)
  .put('/:id', allowedRoles(['admin']), controller.update);
