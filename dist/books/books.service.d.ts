/// <reference types="multer" />
/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { Model } from 'mongoose';
import { IBook } from './interface/books.interface';
import { CreateBookDTO } from './dto/Createbooks.dto';
export declare class BooksService {
    private readonly BookModel;
    constructor(BookModel: Model<IBook>);
    createBook(book: CreateBookDTO, file: Express.Multer.File): Promise<{
        message: string;
        data: import("mongoose").Document<unknown, {}, IBook> & Omit<IBook & {
            _id: import("mongoose").Types.ObjectId;
        }, never>;
    }>;
    findById(id: string): Promise<{
        book: IBook;
    }>;
    update(book: CreateBookDTO, id: string): Promise<{
        book: import("mongoose").Document<unknown, {}, IBook> & Omit<IBook & {
            _id: import("mongoose").Types.ObjectId;
        }, never>;
    }>;
    remove(id: string): Promise<{
        message: string;
    }>;
    getBooks(order: any): Promise<{
        book: (import("mongoose").Document<unknown, {}, IBook> & Omit<IBook & {
            _id: import("mongoose").Types.ObjectId;
        }, never>)[];
    }>;
    getCategory(category: string): Promise<{
        books: (import("mongoose").Document<unknown, {}, IBook> & Omit<IBook & {
            _id: import("mongoose").Types.ObjectId;
        }, never>)[];
    }>;
    updateLike(id: string): Promise<{
        message: string;
        book: IBook;
    }>;
}
