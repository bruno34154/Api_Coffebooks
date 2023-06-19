import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { BooksService } from './books.service';
import { Book } from './books.model';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}
  @Get('get')
  getBook() {
    return this.booksService.getBooks();
  }

  @Get('findById/:id')
  get(@Param() params: any) {
    return this.booksService.findById(params.id);
  }

  @Post('createBook')
  create(@Body() book: Book) {
    return this.booksService.createBook(book);
  }
  @Put('update/:id')
  update(@Body() book: Book, @Param() params: any) {
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
}
