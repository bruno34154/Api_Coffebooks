import * as mongoose from 'mongoose';

export const BookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  book: { type: String, required: true },
  cover: { type: String, required: true },
  category: { type: String, required: true },
});

export interface Book {
  id: string;
  title: string;
  book: string;
  cover: string;
  category: string;
}
