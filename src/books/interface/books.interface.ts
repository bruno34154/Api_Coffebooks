import { Document } from 'mongoose';

export interface IBook extends Document {
  readonly title: string;
  readonly book: string;
  cover: string;
  readonly description: string;
  readonly author: string;
  readonly category: string;
  likes: number;
}
