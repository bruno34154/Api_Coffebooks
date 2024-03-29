import { Document } from 'mongoose';

export interface IUser extends Document {
  readonly email: string;
  readonly password: string;
  readonly name: string;
   profile: string;
  readonly date: string;
}
