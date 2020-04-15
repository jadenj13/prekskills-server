import * as express from 'express';
import controller from './controller';

export default express
  .Router()
  .get('/', controller.getCurrentUser)
  .post('/login', controller.login)
  .post('/register', controller.register);
