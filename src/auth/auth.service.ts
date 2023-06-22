import {
  Injectable,
  NotAcceptableException,
  UnauthorizedException,
} from '@nestjs/common';
import { IUser } from 'src/user/interface/user.interface';
import { UserService } from 'src/user/user.service';
import { JwtService } from '@nestjs/jwt';
import * as bcript from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private jwtService: JwtService,
  ) {}

  async validarUsuario(email: string, password: string) {
    const user = await this.userService.FindoneByemail(email);
    if (!user) {
      throw new UnauthorizedException('usuario nao encontrado!!');
    }
    const IsMatch = await bcript.compare(password, user.password);
    if (IsMatch) {
      return this.gerarToken(user);
    }
    throw new UnauthorizedException('email ou senha invalido!!');
  }

  async gerarToken(payload: IUser) {
    return {
      acess_token: this.jwtService.sign(
        { email: payload.email },
        {
          secret: `${process.env.SECRET}`,
          expiresIn: '50s',
        },
      ),
    };
  }
}
