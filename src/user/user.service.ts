import { BadRequestException, ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { IUser } from './interface/user.interface';
import { CreateUserDTO } from './dto/CreateUserDTO.dto';
import { Model } from 'mongoose';
import * as bycript from 'bcrypt';
import { uploadFiles } from 'src/upload/books.upload';

@Injectable()
export class UserService {
  constructor(@InjectModel('User') private readonly UserModel: Model<IUser>) {}
  async CreateUser(doc: CreateUserDTO, file: Express.Multer.File) {
    try{
      const email = await this.UserModel.findOne({email: doc.email});
      const name = await this.UserModel.findOne({name: doc.name});
      if(email || name){
        throw new ConflictException();
      }
      const saltOnRounds = 10; // diz o numero de saltos que o hash tera
      const hash = await bycript.hash(doc.password, saltOnRounds);
      doc.password = hash;
      const upload = new uploadFiles(file);
      const profile = await upload.uploadFile();
      doc.profile = profile;
      await new this.UserModel(doc).save();
      return {message: 'o usuario foi criado!', user: doc};
    }
    catch(e){
      throw new BadRequestException();
    }
    
  }
  async FindoneByemail(email: string) {
    try{
      const userFound = await this.UserModel.findOne({ email: email });
      return userFound;
    }
    catch(e){
      throw new BadRequestException()
    }
   
  }
  async remove(id: string) {
    try{
     const user =  await this.UserModel.findByIdAndDelete(id).exec();
     if(!user){
      throw new NotFoundException();
     }
     return {message: 'usuario deletado!!'};
    }
    catch(e){
      throw new BadRequestException();
    }
   
  }
  async getUsers(){
    try{
      const users = await this.UserModel.find();
      if(!users){
        throw new NotFoundException();
      }
      return {message: 'usuarios encontrados!', user: users}
    }
    catch(e){
      throw new BadRequestException();
    }
  }
  
  
}
