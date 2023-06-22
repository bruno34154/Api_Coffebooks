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
  category: string;
}

export const BookSchema = SchemaFactory.createForClass(Book);
