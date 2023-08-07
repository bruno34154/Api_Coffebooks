import { Controller, Get, Param, Post, Body, Delete, UseInterceptors, UploadedFile } from '@nestjs/common';
import { CreateUserDTO } from './dto/CreateUserDTO.dto';
import { UserService } from './user.service';
import { FileInterceptor } from '@nestjs/platform-express';
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Post('createUser')
  @UseInterceptors(FileInterceptor('profile'))
  createUser(@Body() user: CreateUserDTO, @UploadedFile() file: Express.Multer.File) {
    return this.userService.CreateUser(user, file);
  }
  @Get('find/:email')
  findOneByEmail(@Param() params: any) {
    return this.userService.FindoneByemail(params.email);
  }
  @Delete('remove/:id')
  remove(@Param() params: any) {
    return this.userService.remove(params.id);
  }
  @Get('get')
  getUsers(){
    return this.userService.getUsers();
  }
}
