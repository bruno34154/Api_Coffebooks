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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const bycript = require("bcrypt");
const books_upload_1 = require("../upload/books.upload");
let UserService = class UserService {
    constructor(UserModel) {
        this.UserModel = UserModel;
    }
    async CreateUser(doc, file) {
        try {
            const email = await this.UserModel.findOne({ email: doc.email });
            const name = await this.UserModel.findOne({ name: doc.name });
            const saltOnRounds = 10;
            const hash = await bycript.hash(doc.password, saltOnRounds);
            doc.password = hash;
            const upload = new books_upload_1.uploadFiles(file);
            const profile = await upload.uploadFile();
            doc.profile = profile;
            await new this.UserModel(doc).save();
            return { message: 'the user was created', user: doc };
        }
        catch (e) {
            throw new common_1.BadRequestException();
        }
    }
    async FindoneByemail(email) {
        const userFound = await this.UserModel.findOne({ email: email });
        return userFound;
    }
    async remove(id) {
        await this.UserModel.findByIdAndDelete(id).exec();
        return 'usuario deletado!!';
    }
};
UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('User')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map