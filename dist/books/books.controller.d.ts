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
/// <reference types="mongoose" />
/// <reference types="mongoose/types/inferschematype" />
import { BooksService } from './books.service';
import { CreateBookDTO } from './dto/Createbooks.dto';
export declare class BooksController {
    private readonly booksService;
    constructor(booksService: BooksService);
    getBook(params: any): Promise<{
        book: (import("mongoose").Document<unknown, {}, import("./interface/books.interface").IBook> & Omit<import("./interface/books.interface").IBook & {
            _id: import("mongoose").Types.ObjectId;
        }, never>)[];
    }>;
    get(params: any): Promise<{
        book: import("./interface/books.interface").IBook;
    }>;
    create(book: CreateBookDTO, file: Express.Multer.File): Promise<{
        message: string;
        data: import("mongoose").Document<unknown, {}, import("./interface/books.interface").IBook> & Omit<import("./interface/books.interface").IBook & {
            _id: import("mongoose").Types.ObjectId;
        }, never>;
    }>;
    update(book: CreateBookDTO, params: any): Promise<{
        book: import("mongoose").Document<unknown, {}, import("./interface/books.interface").IBook> & Omit<import("./interface/books.interface").IBook & {
            _id: import("mongoose").Types.ObjectId;
        }, never>;
    }>;
    remove(params: any): Promise<{
        message: string;
    }>;
    getCategory(params: any): Promise<{
        books: (import("mongoose").Document<unknown, {}, import("./interface/books.interface").IBook> & Omit<import("./interface/books.interface").IBook & {
            _id: import("mongoose").Types.ObjectId;
        }, never>)[];
    }>;
    updateLikes(params: any): Promise<{
        message: string;
        book: import("./interface/books.interface").IBook;
    }>;
}
