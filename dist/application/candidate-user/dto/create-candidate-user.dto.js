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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCandidateUserDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const password_confirm_decorator_1 = require("../../../common/decorators/password-confirm.decorator");
class CreateCandidateUserDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Campo é obrigatório. Trata-se do nome completo do usuário candidato e deve conter no mínimo 3 caracteres.',
        example: 'John Doe',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(3),
    (0, class_validator_1.MaxLength)(30),
    (0, class_validator_1.Matches)(/^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ'\s]+$/g, {
        message: 'O nome de usuário deve conter apenas letras',
    }),
    __metadata("design:type", String)
], CreateCandidateUserDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Campo é obrigatório. Trata-se do e-mail que será usado para realizar o login na aplicação.',
        example: 'johndoe@email.com',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], CreateCandidateUserDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        description: 'Capo é obrigatório, mínimo de 8 caracteres, e tem que ser senha forte (1 letra maiúscular, 1 número e 1 caracter especial).',
        example: 'B12#&d@m',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.MinLength)(8),
    (0, class_validator_1.MaxLength)(20),
    (0, class_validator_1.Matches)(/(?=.*\d)(?=.*[!@#$%^&*]+)(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
        message: 'password too weak',
    }),
    __metadata("design:type", String)
], CreateCandidateUserDto.prototype, "password", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Campo é obrigatório, campo usado para confirmar a senha digitada.',
        example: 'B12#&d@m',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, password_confirm_decorator_1.IsEqualTo)('password'),
    __metadata("design:type", String)
], CreateCandidateUserDto.prototype, "confirmPassword", void 0);
exports.CreateCandidateUserDto = CreateCandidateUserDto;
//# sourceMappingURL=create-candidate-user.dto.js.map