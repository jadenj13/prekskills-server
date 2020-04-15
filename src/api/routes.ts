import { Router } from 'express';
import { userRouter } from './controllers';

export default Router().use('/user', userRouter);
