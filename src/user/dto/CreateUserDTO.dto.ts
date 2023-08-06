import { MinLength, Contains, IsNotEmpty, IsString, IsEmail, Matches, IsDate } from 'class-validator';
export class CreateUserDTO {
  @IsNotEmpty()
  @IsEmail()
  readonly email: string;

  @IsNotEmpty()
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {message: 'password too weak'})
  password: string;

  @IsNotEmpty()
  @MinLength(5)
  readonly name: string;
 
  profile: string;
  
  
  readonly date: string;
}
