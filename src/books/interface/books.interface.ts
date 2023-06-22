import { Document } from 'mongoose';

export interface IBook extends Document {
  readonly title: string;
  readonly book: string;
  readonly cover: string;
  readonly category: string;
}
