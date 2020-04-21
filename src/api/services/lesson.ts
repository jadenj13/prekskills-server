import CrudService from './crud';
import { Lesson, LessonDocument } from '../../db/models';

class LessonService extends CrudService<LessonDocument> {
  Model = Lesson;
}

export default new LessonService();
