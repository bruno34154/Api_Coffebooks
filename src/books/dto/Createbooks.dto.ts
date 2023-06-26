import { MinLength, Contains, IsNotEmpty, IsString } from 'class-validator';
export class CreateBookDTO {
  @IsNotEmpty()
  @MinLength(5)
  @IsString()
  readonly title: string;

  @IsNotEmpty()
  @Contains('https://drive.google.com/', {
    message: 'o link do livro precisa ser do google drive!!',
  })
  @IsString()
  readonly book: string;
  cover: string;

  @IsNotEmpty()
  @MinLength(10)
  @IsString()
  readonly description: string;

  @IsNotEmpty()
  @MinLength(5)
  @IsString()
  readonly author: string;

  readonly category: string;

  likes: number;
}
