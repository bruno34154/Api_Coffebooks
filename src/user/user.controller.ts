import { Controller, Get, Param, Post, Body, Delete } from '@nestjs/common';
import { CreateUserDTO } from './dto/CreateUserDTO.dto';
import { UserService } from './user.service';
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Post('createUser')
  createUser(@Body() user: CreateUserDTO) {
    return this.userService.CreateUser(user);
  }
  @Get('find/:email')
  findOneByEmail(@Param() params: any) {
    return this.userService.FindoneByemail(params.email);
  }
  @Delete('remove/:id')
  remove(@Param() params: any) {
    return this.userService.remove(params.id);
  }
}
