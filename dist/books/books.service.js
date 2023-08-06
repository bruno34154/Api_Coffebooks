"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BooksService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const books_upload_1 = require("../upload/books.upload");
let BooksService = class BooksService {
    constructor(BookModel) {
        this.BookModel = BookModel;
    }
    async createBook(book, file) {
        try {
            const titleBook = await this.BookModel.findOne({ title: book.title });
            const linkBook = await this.BookModel.findOne({ book: book.book });
            if (titleBook || linkBook) {
                throw new common_1.ConflictException();
            }
            const upload = new books_upload_1.uploadFiles(file);
            const image = await upload.uploadFile();
            book.cover = image;
            book.likes = 0;
            const result = await new this.BookModel(book).save();
            return { message: 'The book was created', data: result };
        }
        catch (e) {
            throw new common_1.BadRequestException();
        }
    }
    async findById(id) {
        try {
            const book = await this.BookModel.findById(id);
            if (!book) {
                throw new common_1.NotFoundException();
            }
            return { book: book };
        }
        catch (e) {
            throw new common_1.BadRequestException();
        }
    }
    async update(book, id) {
        try {
            const bookatualizado = await this.BookModel.findByIdAndUpdate(id, book).exec();
            if (!bookatualizado) {
                throw new common_1.NotFoundException();
            }
            return { book: bookatualizado };
        }
        catch (e) {
            throw new common_1.BadRequestException();
        }
    }
    async remove(id) {
        try {
            const deletedBook = await this.BookModel.findByIdAndDelete(id).exec();
            if (!deletedBook) {
                throw new common_1.NotFoundException();
            }
            return { message: 'o livro foi removido' };
        }
        catch (e) {
            throw new common_1.BadRequestException();
        }
    }
    async getBooks(order) {
        try {
            const books = await this.BookModel.find().sort({
                [order]: order == 'title' ? 1 : -1,
            });
            if (!books) {
                throw new common_1.NotFoundException();
            }
            return { book: books };
        }
        catch (e) {
            throw new common_1.BadRequestException();
        }
    }
    async getCategory(category) {
        try {
            const books = await this.BookModel.find({ category: category });
            if (!books) {
                throw new common_1.NotFoundException();
            }
            return { books: books };
        }
        catch (e) {
            throw new common_1.BadRequestException();
        }
    }
    async updateLike(id) {
        try {
            const book = await this.BookModel.findById(id);
            if (!book) {
                throw new common_1.NotFoundException();
            }
            book.likes++;
            const bookUpdate = await this.BookModel.findByIdAndUpdate(id, book).exec();
            return {
                message: '1 gostei adicionado ao livro com sucesso',
                book: book,
            };
        }
        catch (e) {
            throw new common_1.BadRequestException();
        }
    }
};
BooksService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('Book')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], BooksService);
exports.BooksService = BooksService;
//# sourceMappingURL=books.service.js.map