import { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class User extends Document {
  @Prop()
  email: string;

  @Prop()
  password: string;

  @Prop()
  name: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
