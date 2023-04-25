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
exports.ApirParamStackFindById = exports.ApirParamRoleFindById = exports.ApiResponseStackById = exports.ApiResponseStacks = exports.ApiResponseRoleById = exports.ApiResponseRoles = exports.ApiResponseDelete = exports.ApiResponseUpdate = exports.ApirParamFindById = exports.ApiResponseFindById = exports.ApiResponseFindAll = exports.ApiConflictResponseCreate = exports.ApiCreatedResponseCreate = exports.NotFoundExceptionErrorStacks = exports.NotFoundExceptionErrorRoles = exports.StackResponse = exports.RolesResponse = exports.ForbidenExceptiomError = exports.UnauthorizedExceptionError = exports.BadRequestExceptionError = exports.NotFoundExceptionError = exports.ConflictExceptionError = exports.UpdateResponse = exports.UpdateDTOSwagger = exports.ProjectResponseDelete = exports.ProjectResponseFind = exports.ResponseFind = exports.CreatesuccessResponse = void 0;
const swagger_1 = require("@nestjs/swagger");
class CreatesuccessResponse {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1 }),
    __metadata("design:type", Number)
], CreatesuccessResponse.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Proffy' }),
    __metadata("design:type", String)
], CreatesuccessResponse.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Projeto destinado ao cadastro de professores particulares que oferecem o serviço de aulas de reforço',
    }),
    __metadata("design:type", String)
], CreatesuccessResponse.prototype, "projectScope", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'https://docs.google.com/forms/d/e/1FAIpQLSdn7MH9zB9a-50tjh7l__1SDOjVDHN_pkLwEnzGIZY3LR5b8g/viewform;',
    }),
    __metadata("design:type", String)
], CreatesuccessResponse.prototype, "urlTeamSelection", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'John Doe',
    }),
    __metadata("design:type", String)
], CreatesuccessResponse.prototype, "responsible", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '119985643582' }),
    __metadata("design:type", String)
], CreatesuccessResponse.prototype, "contactResponsible", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'https://www.linkedin.com/in/johndoe',
    }),
    __metadata("design:type", String)
], CreatesuccessResponse.prototype, "urlLinkediResponsible", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Com orientações de como montar um boa equipe',
    }),
    __metadata("design:type", String)
], CreatesuccessResponse.prototype, "findyHelp", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'João Paulo, joaop@email.com, (99)9999-9999, linkedin / Maria Laura, mairaL@email.com, (99)9999-9999, linkedin',
    }),
    __metadata("design:type", String)
], CreatesuccessResponse.prototype, "contactLeaders", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 2 }),
    __metadata("design:type", Number)
], CreatesuccessResponse.prototype, "candidateUserId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: false }),
    __metadata("design:type", Boolean)
], CreatesuccessResponse.prototype, "isActive", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '2023-04-06T20:22:34.791Z',
    }),
    __metadata("design:type", Date)
], CreatesuccessResponse.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: null,
    }),
    __metadata("design:type", Date)
], CreatesuccessResponse.prototype, "updatedAt", void 0);
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
class ProjectResponseFind {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1 }),
    __metadata("design:type", Number)
], ProjectResponseFind.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Proffy' }),
    __metadata("design:type", String)
], ProjectResponseFind.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Projeto destinado ao cadastro de professores particulares que oferecem o serviço de aulas de reforço',
    }),
    __metadata("design:type", String)
], ProjectResponseFind.prototype, "projectScope", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'https://docs.google.com/forms/d/e/1FAIpQLSdn7MH9zB9a-50tjh7l__1SDOjVDHN_pkLwEnzGIZY3LR5b8g/viewform;',
    }),
    __metadata("design:type", String)
], ProjectResponseFind.prototype, "urlTeamSelection", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'John Doe' }),
    __metadata("design:type", String)
], ProjectResponseFind.prototype, "responsible", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '119985643582' }),
    __metadata("design:type", String)
], ProjectResponseFind.prototype, "contactResponsible", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'https://www.linkedin.com/in/johndoe' }),
    __metadata("design:type", String)
], ProjectResponseFind.prototype, "urlLinkediResponsible", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 2 }),
    __metadata("design:type", Number)
], ProjectResponseFind.prototype, "candidateUserId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Com orientações de como montar um boa equipe' }),
    __metadata("design:type", String)
], ProjectResponseFind.prototype, "findyHelp", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: false }),
    __metadata("design:type", Boolean)
], ProjectResponseFind.prototype, "isActive", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'João Paulo, joaop@email.com, (99)9999-9999, linkedin / Maria Laura, mairaL@email.com, (99)9999-9999, linkedin',
    }),
    __metadata("design:type", String)
], ProjectResponseFind.prototype, "contactLeaders", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2023-04 - 06T20: 22: 34.791Z' }),
    __metadata("design:type", Date)
], ProjectResponseFind.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: null }),
    __metadata("design:type", Date)
], ProjectResponseFind.prototype, "updatedAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: [
            {
                id: 1,
                projectId: 1,
                stackId: 1,
            },
        ],
    }),
    __metadata("design:type", Array)
], ProjectResponseFind.prototype, "language", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: [
            {
                id: 9,
                projectId: 3,
                rolesId: 1,
            },
        ],
    }),
    __metadata("design:type", Array)
], ProjectResponseFind.prototype, "professional", void 0);
exports.ProjectResponseFind = ProjectResponseFind;
class ProjectResponseDelete {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Successfully removed!' }),
    __metadata("design:type", String)
], ProjectResponseDelete.prototype, "message", void 0);
exports.ProjectResponseDelete = ProjectResponseDelete;
class UpdateDTOSwagger {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Nome novo do Projeto' }),
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
    (0, swagger_1.ApiProperty)({ example: 'Project not found' }),
    __metadata("design:type", String)
], NotFoundExceptionError.prototype, "message", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Not Found' }),
    __metadata("design:type", String)
], NotFoundExceptionError.prototype, "error", void 0);
exports.NotFoundExceptionError = NotFoundExceptionError;
class BadRequestExceptionError {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 400 }),
    __metadata("design:type", Number)
], BadRequestExceptionError.prototype, "statusCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'he ID was not informed, please inform!' }),
    __metadata("design:type", String)
], BadRequestExceptionError.prototype, "message", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Bad Request' }),
    __metadata("design:type", String)
], BadRequestExceptionError.prototype, "error", void 0);
exports.BadRequestExceptionError = BadRequestExceptionError;
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
class ForbidenExceptiomError {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 403 }),
    __metadata("design:type", Number)
], ForbidenExceptiomError.prototype, "statusCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Forbidden resource' }),
    __metadata("design:type", String)
], ForbidenExceptiomError.prototype, "message", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Forbidden' }),
    __metadata("design:type", String)
], ForbidenExceptiomError.prototype, "error", void 0);
exports.ForbidenExceptiomError = ForbidenExceptiomError;
class RolesResponse {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1 }),
    __metadata("design:type", Number)
], RolesResponse.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Front-End' }),
    __metadata("design:type", String)
], RolesResponse.prototype, "title", void 0);
exports.RolesResponse = RolesResponse;
class StackResponse {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1 }),
    __metadata("design:type", Number)
], StackResponse.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'JavaScript' }),
    __metadata("design:type", String)
], StackResponse.prototype, "title", void 0);
exports.StackResponse = StackResponse;
class NotFoundExceptionErrorRoles {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 404 }),
    __metadata("design:type", Number)
], NotFoundExceptionErrorRoles.prototype, "statusCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Roles not found' }),
    __metadata("design:type", String)
], NotFoundExceptionErrorRoles.prototype, "message", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Not Found' }),
    __metadata("design:type", String)
], NotFoundExceptionErrorRoles.prototype, "error", void 0);
exports.NotFoundExceptionErrorRoles = NotFoundExceptionErrorRoles;
class NotFoundExceptionErrorStacks {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 404 }),
    __metadata("design:type", Number)
], NotFoundExceptionErrorStacks.prototype, "statusCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Skills not found' }),
    __metadata("design:type", String)
], NotFoundExceptionErrorStacks.prototype, "message", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Not Found' }),
    __metadata("design:type", String)
], NotFoundExceptionErrorStacks.prototype, "error", void 0);
exports.NotFoundExceptionErrorStacks = NotFoundExceptionErrorStacks;
exports.ApiCreatedResponseCreate = {
    description: 'Endpoint responsável por criar novo projeto pelo candidato. O ID do usuário candidato é passado automaticamente pelo token',
    type: CreatesuccessResponse,
};
exports.ApiConflictResponseCreate = {
    description: 'Project name already exists',
    type: ConflictExceptionError,
};
exports.ApiResponseFindAll = {
    status: 200,
    description: 'Endpoint que retorna todos os usuários candidatos. Precisa estar autenticado com o token JWT',
};
exports.ApiResponseFindById = {
    status: 200,
    description: 'Endpoint que retorna um projeto conforme id informado. Precisa estar autenticado com o token JWT',
};
exports.ApirParamFindById = {
    name: 'id',
    required: true,
    description: 'Um número inteiro para o id do projeto',
    schema: { oneOf: [{ type: 'integer' }] },
};
exports.ApiResponseUpdate = {
    status: 200,
    description: 'Endpoint usando para editar o perfil do projeto. Precisa estar autenticado com o token JWT',
};
exports.ApiResponseDelete = {
    status: 200,
    description: 'Endpoint que remove um conforme id informado. Precisa estar autenticado com o token JWT',
};
exports.ApiResponseRoles = {
    status: 200,
    description: 'Endpoint que retorna todas profissões/cargos. Precisa estar autenticado com o token JWT',
};
exports.ApiResponseRoleById = {
    status: 200,
    description: 'Endpoint que retorna uma profissão/cargo conforme id informado. Precisa estar autenticado com o token JWT',
};
exports.ApiResponseStacks = {
    status: 200,
    description: 'Endpoint que retorna todas linguagens/ferramentas. Precisa estar autenticado com o token JWT',
};
exports.ApiResponseStackById = {
    status: 200,
    description: 'Endpoint que retorna uma linguagem/ferramenta conforme id informado. Precisa estar autenticado com o token JWT',
};
exports.ApirParamRoleFindById = {
    name: 'id',
    required: true,
    description: 'Um número inteiro para o id da profissão/cargo',
    schema: { oneOf: [{ type: 'integer' }] },
};
exports.ApirParamStackFindById = {
    name: 'id',
    required: true,
    description: 'Um número inteiro para o id da linguagem/ferramenta',
    schema: { oneOf: [{ type: 'integer' }] },
};
//# sourceMappingURL=success.response.js.map