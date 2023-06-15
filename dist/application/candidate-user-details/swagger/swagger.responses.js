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
exports.ApiResponseUpdate = exports.ApiParamFindById = exports.ApiResponseFindById = exports.ApiResponseFindAll = exports.ApiConflictResponseCreate = exports.ApiCreatedResponseCreate = exports.UnauthorizedExceptionError = exports.NotFoundExceptionError = exports.ConflictExceptionError = exports.UpdateResponse = exports.UpdateDTOSwagger = exports.ResponseFind = exports.CreatesuccessResponse = void 0;
const swagger_1 = require("@nestjs/swagger");
class CreatesuccessResponse {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1 }),
    __metadata("design:type", Number)
], CreatesuccessResponse.prototype, "detailsId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1 }),
    __metadata("design:type", Number)
], CreatesuccessResponse.prototype, "candidateUserId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Female' }),
    __metadata("design:type", String)
], CreatesuccessResponse.prototype, "gender", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '01/01/2001' }),
    __metadata("design:type", String)
], CreatesuccessResponse.prototype, "birthDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Rio de Janeiro' }),
    __metadata("design:type", String)
], CreatesuccessResponse.prototype, "residencePlace", void 0);
exports.CreatesuccessResponse = CreatesuccessResponse;
class ResponseFind {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1 }),
    __metadata("design:type", Number)
], ResponseFind.prototype, "detailsId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1 }),
    __metadata("design:type", Number)
], ResponseFind.prototype, "candidateUserId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Female' }),
    __metadata("design:type", String)
], ResponseFind.prototype, "gender", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '01/01/2001' }),
    __metadata("design:type", String)
], ResponseFind.prototype, "birthDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Rio de Janeiro' }),
    __metadata("design:type", String)
], ResponseFind.prototype, "residencePlace", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '01/01/2001' }),
    __metadata("design:type", String)
], ResponseFind.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '01/01/2001' }),
    __metadata("design:type", String)
], ResponseFind.prototype, "updatedAt", void 0);
exports.ResponseFind = ResponseFind;
class UpdateDTOSwagger {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Female' }),
    __metadata("design:type", String)
], UpdateDTOSwagger.prototype, "gender", void 0);
exports.UpdateDTOSwagger = UpdateDTOSwagger;
class UpdateResponse {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Updated successfully' }),
    __metadata("design:type", String)
], UpdateResponse.prototype, "message", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1 }),
    __metadata("design:type", Number)
], UpdateResponse.prototype, "detailsId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1 }),
    __metadata("design:type", Number)
], UpdateResponse.prototype, "candidateUserId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Female' }),
    __metadata("design:type", String)
], UpdateResponse.prototype, "gender", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '01/01/2001' }),
    __metadata("design:type", String)
], UpdateResponse.prototype, "birthDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Rio de Janeiro' }),
    __metadata("design:type", String)
], UpdateResponse.prototype, "residencePlace", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '01/01/2001' }),
    __metadata("design:type", String)
], UpdateResponse.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '01/01/2001' }),
    __metadata("design:type", String)
], UpdateResponse.prototype, "updatedAt", void 0);
exports.UpdateResponse = UpdateResponse;
class ConflictExceptionError {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 409 }),
    __metadata("design:type", Number)
], ConflictExceptionError.prototype, "statusCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'This candidate user already has registered details',
    }),
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
    description: 'Endpoint responsável por criar novo registro de detalhes do usuário.',
    type: CreatesuccessResponse,
};
exports.ApiConflictResponseCreate = {
    description: "Candidate user doesn't exist",
    type: ConflictExceptionError,
};
exports.ApiResponseFindAll = {
    status: 200,
    description: 'Endpoint que retorna os detalhes de todos os usuários candidatos. Precisa estar autenticado com o token JWT',
};
exports.ApiResponseFindById = {
    status: 200,
    description: 'Endpoint que retorna os detalhes de um usuário candidato conforme id informado. Precisa estar autenticado com o token JWT',
};
exports.ApiParamFindById = {
    name: 'id',
    required: true,
    description: 'Um número inteiro para o id do registro de detalhes do usuário candidato',
    schema: { oneOf: [{ type: 'integer' }] },
};
exports.ApiResponseUpdate = {
    status: 200,
    description: 'Endpoint usando para editar os detalhes do usuário candidato. Precisa estar autenticado com o token JWT',
};
//# sourceMappingURL=swagger.responses.js.map