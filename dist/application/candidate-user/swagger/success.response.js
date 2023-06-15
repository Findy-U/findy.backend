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
exports.ApiResponseEmailConfirmation = exports.ApiResponseUpdate = exports.ApirParamFindById = exports.ApiResponseFindById = exports.ApiResponseFindAll = exports.ApiConflictResponseCreate = exports.ApiCreatedResponseCreate = exports.UnauthorizedExceptionError = exports.NotFoundExceptionError = exports.ConflictExceptionError = exports.ConfirmEmailResponse = exports.UpdateResponse = exports.UpdateDTOSwagger = exports.ResponseFind = exports.CreatesuccessResponse = void 0;
const swagger_1 = require("@nestjs/swagger");
class CreatesuccessResponse {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1 }),
    __metadata("design:type", Number)
], CreatesuccessResponse.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'John Does' }),
    __metadata("design:type", String)
], CreatesuccessResponse.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'johndoe@email.com' }),
    __metadata("design:type", String)
], CreatesuccessResponse.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'candidate' }),
    __metadata("design:type", String)
], CreatesuccessResponse.prototype, "roles", void 0);
exports.CreatesuccessResponse = CreatesuccessResponse;
class ResponseFind {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1 }),
    __metadata("design:type", Number)
], ResponseFind.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'John Doe' }),
    __metadata("design:type", String)
], ResponseFind.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'johndoe@email.com' }),
    __metadata("design:type", String)
], ResponseFind.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'candidate' }),
    __metadata("design:type", String)
], ResponseFind.prototype, "roles", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'findy' }),
    __metadata("design:type", String)
], ResponseFind.prototype, "provider", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: null }),
    __metadata("design:type", String)
], ResponseFind.prototype, "providerId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Date)
], ResponseFind.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Date)
], ResponseFind.prototype, "updatedAt", void 0);
exports.ResponseFind = ResponseFind;
class UpdateDTOSwagger {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Naruto Uzumaki' }),
    __metadata("design:type", String)
], UpdateDTOSwagger.prototype, "name", void 0);
exports.UpdateDTOSwagger = UpdateDTOSwagger;
class UpdateResponse {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Update successfully' }),
    __metadata("design:type", String)
], UpdateResponse.prototype, "message", void 0);
exports.UpdateResponse = UpdateResponse;
class ConfirmEmailResponse {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Email confirmed successfully' }),
    __metadata("design:type", String)
], ConfirmEmailResponse.prototype, "message", void 0);
exports.ConfirmEmailResponse = ConfirmEmailResponse;
class ConflictExceptionError {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 409 }),
    __metadata("design:type", Number)
], ConflictExceptionError.prototype, "statusCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Candidate user already exists' }),
    __metadata("design:type", String)
], ConflictExceptionError.prototype, "message", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Conflict' }),
    __metadata("design:type", String)
], ConflictExceptionError.prototype, "error", void 0);
exports.ConflictExceptionError = ConflictExceptionError;
class NotFoundExceptionError {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 404 }),
    __metadata("design:type", Number)
], NotFoundExceptionError.prototype, "statusCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Candidate user not found' }),
    __metadata("design:type", String)
], NotFoundExceptionError.prototype, "message", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Not Found' }),
    __metadata("design:type", String)
], NotFoundExceptionError.prototype, "error", void 0);
exports.NotFoundExceptionError = NotFoundExceptionError;
class UnauthorizedExceptionError {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 401 }),
    __metadata("design:type", Number)
], UnauthorizedExceptionError.prototype, "statusCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Unauthorized user' }),
    __metadata("design:type", String)
], UnauthorizedExceptionError.prototype, "message", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Unauthorized' }),
    __metadata("design:type", String)
], UnauthorizedExceptionError.prototype, "error", void 0);
exports.UnauthorizedExceptionError = UnauthorizedExceptionError;
exports.ApiCreatedResponseCreate = {
    description: 'Endpoint responsável por criar novo usuário candidato.',
    type: CreatesuccessResponse,
};
exports.ApiConflictResponseCreate = {
    description: 'Username already exists',
    type: ConflictExceptionError,
};
exports.ApiResponseFindAll = {
    status: 200,
    description: 'Endpoint que retorna todos os usuários candidatos. Precisa estar autenticado com o token JWT',
};
exports.ApiResponseFindById = {
    status: 200,
    description: 'Endpoint que retorna um usuário candidato conforme id informado. Precisa estar autenticado com o token JWT',
};
exports.ApirParamFindById = {
    name: 'id',
    required: true,
    description: 'Um número inteiro para o id do usuário candidato',
    schema: { oneOf: [{ type: 'integer' }] },
};
exports.ApiResponseUpdate = {
    status: 200,
    description: 'Endpoint usando para editar o perfil do usuário candidato. Precisa estar autenticado com o token JWT',
};
exports.ApiResponseEmailConfirmation = {
    status: 200,
    description: 'Endpoint usado para confirmação do email do usuário candidato',
};
//# sourceMappingURL=success.response.js.map