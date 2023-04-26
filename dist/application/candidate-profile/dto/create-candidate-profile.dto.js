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
exports.CreateCandidateProfileDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateCandidateProfileDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Campo é obrigatório',
        example: 'Texto da descrição do perfil do usuário',
    }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Este campo é obrigatório.' }),
    (0, class_validator_1.IsString)({ message: 'Este campo recebe somente String' }),
    __metadata("design:type", String)
], CreateCandidateProfileDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Campo é obrigatório', example: '61998673265' }),
    (0, class_validator_1.IsString)({ message: 'Este campo recebe somente String' }),
    __metadata("design:type", String)
], CreateCandidateProfileDto.prototype, "phone", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Campo não é obrigatório',
        example: 'https://www.github.com/eemr3',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({ message: 'Este campo recebe somente String' }),
    __metadata("design:type", String)
], CreateCandidateProfileDto.prototype, "urlGithub", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Campo é obrigatório',
        example: 'https://www.linkedin.com/in/emerson-moreira',
    }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Este campo é obrigatório.' }),
    (0, class_validator_1.IsString)({ message: 'Este campo recebe somente String' }),
    __metadata("design:type", String)
], CreateCandidateProfileDto.prototype, "urlLinkedin", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Campo é obrigatório',
        example: [8, 9, 11, 19, 20, 23, 26, 27],
    }),
    (0, class_validator_1.ArrayNotEmpty)({ message: 'Este campo é obrigatório.' }),
    (0, class_validator_1.IsNumber)({}, { each: true }),
    __metadata("design:type", Array)
], CreateCandidateProfileDto.prototype, "profileSkills", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Campo é obrigatório',
        example: ['Front-End', 'UX', 'UI'],
    }),
    (0, class_validator_1.ArrayNotEmpty)({ message: 'Este campo é obrigatório.' }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsString)({ each: true }),
    __metadata("design:type", Array)
], CreateCandidateProfileDto.prototype, "occupationArea", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Campo não é obrigatório',
        example: ['Tech Lead'],
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsString)({ each: true }),
    __metadata("design:type", Array)
], CreateCandidateProfileDto.prototype, "others", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Campo é obrigatório',
        example: 'Qeuro atuar como desenvolvedor Front-end e Tech lead no projeto',
    }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Este campo é obrigatório.' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateCandidateProfileDto.prototype, "areaOfInterest", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Tenho 2 horas por dia, nose dias segunda, terça e sexta',
    }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Este campo é obrigatório.' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateCandidateProfileDto.prototype, "availableTime", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Campo numérico', example: 2 }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateCandidateProfileDto.prototype, "candidateUserId", void 0);
exports.CreateCandidateProfileDto = CreateCandidateProfileDto;
//# sourceMappingURL=create-candidate-profile.dto.js.map