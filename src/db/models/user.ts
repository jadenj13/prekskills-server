import * as mongoose from 'mongoose';

interface User {
  name: string;
  email: string;
  password: string;
  role: 'user' | 'admin';
  created: Date;
}

export interface UserDocument extends User, mongoose.Document {}

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true, index: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['user', 'admin'], default: 'user' },
  created: { type: Date, default: Date.now.bind(Date) },
});

export const User =
  mongoose.models.users || mongoose.model<UserDocument>('users', userSchema);
