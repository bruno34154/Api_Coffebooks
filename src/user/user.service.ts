import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './user.model';
import { Model } from 'mongoose';
import * as bycript from 'bcrypt';

@Injectable()
export class UserService {
  constructor(@InjectModel('User') private readonly UserModel: Model<User>) {}
  async CreateUser(doc: User) {
    const saltOnRounds = 10; // diz o numero de saltos que o hash tera
    const hash = await bycript.hash(doc.password, saltOnRounds);
    const user = {
      email: doc.email,
      password: hash,
      name: doc.name,
    };
    await new this.UserModel(user).save();
    return 'usuario cadastro!!';
  }
  async FindoneByemail(email: string) {
    const userFound = await this.UserModel.findOne({ email: email });
    return userFound;
  }
  async remove(id: string) {
    await this.UserModel.findByIdAndDelete(id).exec();
    return 'usuario deletado!!';
  }
}
