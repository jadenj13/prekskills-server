import { Router } from 'express';
import { userRouter, lessonRouter, uploadRouter } from './controllers';

export default Router()
  .use('/user', userRouter)
  .use('/lesson', lessonRouter)
  .use('/upload', uploadRouter);
