import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { BooksService } from './books.service';
import { CreateBookDTO } from './dto/Createbooks.dto';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}
  @Get('get/:order')
  getBook(@Param() params: any) {
    return this.booksService.getBooks(params.order);
  }

  @Get('findById/:id')
  get(@Param() params: any) {
    return this.booksService.findById(params.id);
  }

  @Post('createBook')
  @UseInterceptors(FileInterceptor('cover'))
  create(
    @Body() book: CreateBookDTO,
    @UploadedFile() file: Express.Multer.File,
  ) {
    return this.booksService.createBook(book, file);
  }
  @Put('update/:id')
  update(@Body() book: CreateBookDTO, @Param() params: any) {
    return this.booksService.update(book, params.id);
  }

  @Delete('remove/:id')
  remove(@Param() params: any) {
    return this.booksService.remove(params.id);
  }

  @Get('category/:category')
  getCategory(@Param() params: any) {
    return this.booksService.getCategory(params.category);
  }
  @Put('likes/:id')
  updateLikes(@Param() params: any) {
    return this.booksService.updateLike(params.id);
  }
}
