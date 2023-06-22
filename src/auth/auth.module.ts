import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalStrategy } from './local.auth';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AuthController } from './auth.controller';
import { UserService } from 'src/user/user.service';
import { UserSchema } from 'src/user/model/user.model';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'User',
        schema: UserSchema,
      },
    ]),
    PassportModule,
    JwtModule,
  ],
  providers: [AuthService, LocalStrategy, UserService],
  controllers: [AuthController],
})
export class AuthModule {}
