import { Document } from 'mongoose';
import { Prop, SchemaFactory, Schema } from '@nestjs/mongoose';

@Schema()
export class Book extends Document {
  @Prop()
  title: string;

  @Prop()
  book: string;

  @Prop()
  cover: string;

  @Prop()
  description: string;

  @Prop()
  author: string;

  @Prop()
  category: string;

  @Prop()
  likes: number;
}

export const BookSchema = SchemaFactory.createForClass(Book);
