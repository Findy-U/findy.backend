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
exports.ApiMarketInformationParamFindById = exports.ApiMarketInformationResponseFindById = exports.ApiMarketInformationResponseFindAll = exports.ApiMarketInformationConflictResponseCreate = exports.ApiMarketInformationCreatedResponseCreate = exports.NotFoundExceptionErrorStacks = exports.NotFoundExceptionErrorRoles = exports.StackResponse = exports.RolesResponse = exports.ForbidenExceptiomError = exports.UnauthorizedExceptionError = exports.BadRequestExceptionError = exports.ProfileNotFoundExceptionError = exports.CandidateUserNotFoundExceptionError = exports.SurveyMarketInfoConflictExceptionError = exports.ProfileResponseFind = exports.CreateSurveyMarketInformationSuccessResponse = void 0;
const swagger_1 = require("@nestjs/swagger");
class CreateSurveyMarketInformationSuccessResponse {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1 }),
    __metadata("design:type", Number)
], CreateSurveyMarketInformationSuccessResponse.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Linkedin' }),
    __metadata("design:type", String)
], CreateSurveyMarketInformationSuccessResponse.prototype, "metFindy", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Jonh Doe',
    }),
    __metadata("design:type", String)
], CreateSurveyMarketInformationSuccessResponse.prototype, "friendName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'jonhdoe@email.com',
    }),
    __metadata("design:type", String)
], CreateSurveyMarketInformationSuccessResponse.prototype, "friendEmail", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 4 }),
    __metadata("design:type", Number)
], CreateSurveyMarketInformationSuccessResponse.prototype, "candidateUserId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Date)
], CreateSurveyMarketInformationSuccessResponse.prototype, "createdAt", void 0);
exports.CreateSurveyMarketInformationSuccessResponse = CreateSurveyMarketInformationSuccessResponse;
class ProfileResponseFind {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1 }),
    __metadata("design:type", Number)
], ProfileResponseFind.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Texto da uma descrição' }),
    __metadata("design:type", String)
], ProfileResponseFind.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'https://www.github.com/user',
    }),
    __metadata("design:type", String)
], ProfileResponseFind.prototype, "urlGithub", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'https://www.linkedin.com/in/user',
    }),
    __metadata("design:type", String)
], ProfileResponseFind.prototype, "urlLinkedin", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '11999999999' }),
    __metadata("design:type", String)
], ProfileResponseFind.prototype, "phone", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Tenho 2 horas por dia, nose dias segunda, terça e sexta',
    }),
    __metadata("design:type", String)
], ProfileResponseFind.prototype, "availableTime", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Qeuro atuar como desenvolvedor Front-end e Tech lead no projeto',
    }),
    __metadata("design:type", String)
], ProfileResponseFind.prototype, "areaOfInterest", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 2 }),
    __metadata("design:type", Number)
], ProfileResponseFind.prototype, "candidateUserId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: [
            {
                id: 2,
                name: 'John Doe',
                email: 'eemr3@yahoo.com.br',
                roles: 'candidate',
                provider: 'findy',
                providerId: null,
                createdAt: '2023-04-08T18:35:51.304Z',
                updatedAt: null,
                recoverToken: null,
            },
        ],
    }),
    __metadata("design:type", Array)
], ProfileResponseFind.prototype, "candidateUser", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: [{ id: 13, title: 'Front-End', userId: 2, profileId: 4 }],
    }),
    __metadata("design:type", Array)
], ProfileResponseFind.prototype, "occupationArea", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: [
            {
                id: 9,
                profileId: 4,
                stackId: 19,
            },
        ],
    }),
    __metadata("design:type", Array)
], ProfileResponseFind.prototype, "profileSkills", void 0);
exports.ProfileResponseFind = ProfileResponseFind;
class SurveyMarketInfoConflictExceptionError {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 409 }),
    __metadata("design:type", Number)
], SurveyMarketInfoConflictExceptionError.prototype, "statusCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'User already has a survey',
    }),
    __metadata("design:type", String)
], SurveyMarketInfoConflictExceptionError.prototype, "message", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Conflict' }),
    __metadata("design:type", String)
], SurveyMarketInfoConflictExceptionError.prototype, "error", void 0);
exports.SurveyMarketInfoConflictExceptionError = SurveyMarketInfoConflictExceptionError;
class CandidateUserNotFoundExceptionError {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 404 }),
    __metadata("design:type", Number)
], CandidateUserNotFoundExceptionError.prototype, "statusCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Candidate user not found' }),
    __metadata("design:type", String)
], CandidateUserNotFoundExceptionError.prototype, "message", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Not Found' }),
    __metadata("design:type", String)
], CandidateUserNotFoundExceptionError.prototype, "error", void 0);
exports.CandidateUserNotFoundExceptionError = CandidateUserNotFoundExceptionError;
class ProfileNotFoundExceptionError {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 404 }),
    __metadata("design:type", Number)
], ProfileNotFoundExceptionError.prototype, "statusCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Profile not found' }),
    __metadata("design:type", String)
], ProfileNotFoundExceptionError.prototype, "message", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Not Found' }),
    __metadata("design:type", String)
], ProfileNotFoundExceptionError.prototype, "error", void 0);
exports.ProfileNotFoundExceptionError = ProfileNotFoundExceptionError;
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
exports.ApiMarketInformationCreatedResponseCreate = {
    description: 'Endpoint responsável por salvar o dado "Como você ficou sabendo sobre a Findy?" no BD. Precisa estar autenticado com o token JWT',
    type: CreateSurveyMarketInformationSuccessResponse,
};
exports.ApiMarketInformationConflictResponseCreate = {
    description: 'Username already exists',
    type: SurveyMarketInfoConflictExceptionError,
};
exports.ApiMarketInformationResponseFindAll = {
    status: 200,
    description: 'Endpoint que retorna todos os dados referente a "Como você ficou sabendo sobre a Findy?". Precisa estar autenticado com o token JWT',
};
exports.ApiMarketInformationResponseFindById = {
    status: 200,
    description: 'Endpoint que retorna um dado referente a "Como você ficou sabendo sobre a Findy?" conforme id informado. Precisa estar autenticado com o token JWT',
};
exports.ApiMarketInformationParamFindById = {
    name: 'id',
    required: true,
    description: 'Um número inteiro para o id do perfil',
    schema: { oneOf: [{ type: 'integer' }] },
};
//# sourceMappingURL=success.response.js.map