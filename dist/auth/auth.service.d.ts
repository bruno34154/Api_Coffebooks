import { IUser } from 'src/user/interface/user.interface';
import { UserService } from 'src/user/user.service';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private readonly userService;
    private jwtService;
    constructor(userService: UserService, jwtService: JwtService);
    validarUsuario(email: string, password: string): Promise<{
        acess_token: string;
    }>;
    gerarToken(payload: IUser): Promise<{
        acess_token: string;
    }>;
}
