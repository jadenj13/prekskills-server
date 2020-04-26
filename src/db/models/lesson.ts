import * as mongoose from 'mongoose';

interface ILesson {
  name: string;
  description: string;
  standard: string;
  questions: Array<{
    sd: {
      text: string;
      imgUrl: string;
      recordingUrl: string;
    };
    answers: Array<{ isCorrect: boolean; imgUrl: string }>;
  }>;
  created: Date;
}

export interface LessonDocument extends ILesson, mongoose.Document {}

const lessonSchema = new mongoose.Schema({
  name: String,
  description: String,
  standard: String,
  questions: { type: Array, default: [] },
  created: { type: Date, default: Date.now.bind(Date) },
});

export const Lesson =
  mongoose.models.lessons ||
  mongoose.model<LessonDocument>('lessons', lessonSchema);
