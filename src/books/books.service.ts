import {
  Injectable,
  BadRequestException,
  ConflictException,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Book } from './model/books.model';
import { AnyArray, Model } from 'mongoose';
import { IBook } from './interface/books.interface';
import { CreateBookDTO } from './dto/Createbooks.dto';
import { uploadFiles } from 'src/upload/books.upload';

@Injectable()
export class BooksService {
  constructor(@InjectModel('Book') private readonly BookModel: Model<IBook>) {}

  async createBook(book: CreateBookDTO, file: Express.Multer.File) {
    try {
      const titleBook = await this.BookModel.findOne({ title: book.title });
      const linkBook = await this.BookModel.findOne({ book: book.book });

      if (titleBook || linkBook) {
        throw new ConflictException();
      }

      const upload = new uploadFiles(file);
      const image = await upload.uploadFile();
      book.cover = image;
      book.likes = 0;
      const result = await new this.BookModel(book).save();
      return { message: 'The book was created', data: result };
    } catch (e) {
      throw new BadRequestException();
    }
  }
  async findById(id: string) {
    try {
      const book: IBook = await this.BookModel.findById(id);
      if (!book) {
        throw new NotFoundException();
      }
      return { book: book };
    } catch (e) {
      throw new BadRequestException();
    }
  }

  async update(book: CreateBookDTO, id: string) {
    try {
      const bookatualizado = await this.BookModel.findByIdAndUpdate(
        id,
        book,
      ).exec();
      if (!bookatualizado) {
        throw new NotFoundException();
      }
      return { book: bookatualizado };
    } catch (e) {
      throw new BadRequestException();
    }
    // ...
  }

  async remove(id: string) {
    // ...
    try {
      const deletedBook = await this.BookModel.findByIdAndDelete(id).exec();
      if (!deletedBook) {
        throw new NotFoundException();
      }
      return { message: 'o livro foi removido' };
    } catch (e) {
      throw new BadRequestException();
    }
  }
  async getBooks(order: any) {
    /*aqui no futuro pode ter uma rota opcional para ordenar por mais likes*/
    try {
      const books = await this.BookModel.find().sort({
        [order]: order == 'title' ? 1 : -1,
      });
      if (!books) {
        throw new NotFoundException();
      }
      return { book: books };
    } catch (e) {
      throw new BadRequestException();
    }
  }

  async getCategory(category: string) {
    try {
      const books = await this.BookModel.find({ category: category });
      if (!books) {
        throw new NotFoundException();
      }
      return { books: books };
    } catch (e) {
      throw new BadRequestException();
    }
  }

  async updateLike(id: string) {
    try {
      const book: IBook = await this.BookModel.findById(id);
      if (!book) {
        throw new NotFoundException();
      }
      book.likes++;
      const bookUpdate = await this.BookModel.findByIdAndUpdate(
        id,
        book,
      ).exec();
      return {
        message: '1 gostei adicionado ao livro com sucesso',
        book: book,
      };
    } catch (e) {
      throw new BadRequestException();
    }
  }
}
