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
exports.ApiProfessionalSituationConflictResponseCreate = exports.ApiProfessionalSituationCreatedResponseCreate = exports.ForbidenExceptiomError = exports.UnauthorizedExceptionError = exports.ProfessionalSituationConflictExceptionError = exports.ProfessionalSituationResponseFind = exports.CreateSurveyProfessionalSituationResponse = void 0;
const swagger_1 = require("@nestjs/swagger");
class CreateSurveyProfessionalSituationResponse {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1 }),
    __metadata("design:type", Number)
], CreateSurveyProfessionalSituationResponse.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Empregado em tempo integral na área de tecnologia' }),
    __metadata("design:type", String)
], CreateSurveyProfessionalSituationResponse.prototype, "situation", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Engenharia de Software',
    }),
    __metadata("design:type", String)
], CreateSurveyProfessionalSituationResponse.prototype, "ocupationArea", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Consolidar os conhecimentos dentro da minha área',
    }),
    __metadata("design:type", String)
], CreateSurveyProfessionalSituationResponse.prototype, "objectives", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 4 }),
    __metadata("design:type", Number)
], CreateSurveyProfessionalSituationResponse.prototype, "candidateUserId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Date)
], CreateSurveyProfessionalSituationResponse.prototype, "createdAt", void 0);
exports.CreateSurveyProfessionalSituationResponse = CreateSurveyProfessionalSituationResponse;
class ProfessionalSituationResponseFind {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1 }),
    __metadata("design:type", Number)
], ProfessionalSituationResponseFind.prototype, "id", void 0);
exports.ProfessionalSituationResponseFind = ProfessionalSituationResponseFind;
class ProfessionalSituationConflictExceptionError {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 409 }),
    __metadata("design:type", Number)
], ProfessionalSituationConflictExceptionError.prototype, "statusCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'User already has a survey',
    }),
    __metadata("design:type", String)
], ProfessionalSituationConflictExceptionError.prototype, "message", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Conflict' }),
    __metadata("design:type", String)
], ProfessionalSituationConflictExceptionError.prototype, "error", void 0);
exports.ProfessionalSituationConflictExceptionError = ProfessionalSituationConflictExceptionError;
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
exports.ApiProfessionalSituationCreatedResponseCreate = {
    description: 'Endpoint responsável por salvar o dado "Como você ficou sabendo sobre a Findy?" no BD. Precisa estar autenticado com o token JWT',
    type: CreateSurveyProfessionalSituationResponse,
};
exports.ApiProfessionalSituationConflictResponseCreate = {
    description: 'Username already exists',
    type: ProfessionalSituationConflictExceptionError,
};
//# sourceMappingURL=success.response.js.map