import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Book } from './books.model';
import { Model } from 'mongoose';

@Injectable()
export class BooksService {
  constructor(@InjectModel('Book') private readonly BookModel: Model<Book>) {}

  async createBook(doc: Book) {
    const result = await new this.BookModel(doc).save();
    return result.id;
  }
  async findById(id: string) {
    // ...
    const book: Book = await this.BookModel.findById(id);
    return { message: book };
  }

  async update(book: Book, id: string) {
    const bookatualizado = await this.BookModel.findByIdAndUpdate(
      id,
      book,
    ).exec();
    return bookatualizado;

    // ...
  }

  async remove(id: string) {
    // ...
    await this.BookModel.findByIdAndDelete(id).exec();
    return { message: 'o livro foi removido' };
  }
  async getBooks() {
    const books = await this.BookModel.find();
    return books;
  }

  async getCategory(category: string) {
    const books = await this.BookModel.find();
    const categoryBook = books.filter((book) => {
      if (book.category == category) {
        return book;
      }
    });
    return categoryBook;
  }
}
