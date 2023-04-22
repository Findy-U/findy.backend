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
exports.CreateCandidateProjectDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateCandidateProjectDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Proffy' }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateCandidateProjectDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Projeto destinado ao cadastro de professores particulares que oferecem o serviço de aulas de reforço',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateCandidateProjectDto.prototype, "projectScope", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'https://docs.google.com/forms/d/e/1FAIpQLSdn7MH9zB9a-50tjh7l__1SDOjVDHN_pkLwEnzGIZY3LR5b8g/viewform',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateCandidateProjectDto.prototype, "urlTeamSelection", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Campo destinado ao prenchimento com o nome do responsável pelo projeto (dono/usuário que criou)',
        example: 'John Doe',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateCandidateProjectDto.prototype, "responsible", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Campo destinado ao prenchimento com o contado do responsável pelo projeto (dono/usuário que criou)',
        example: '99999999999',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateCandidateProjectDto.prototype, "contactResponsible", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Campo destinado ao prenchimento com link do linkedin do responsável pelo projeto (dono/usuário que criou)',
        example: 'https://www.linkedin.com/in/johndoe',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateCandidateProjectDto.prototype, "urlLinkediResponsible", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Este campo recebe uma string com os nomes do(s) lider(es) e seu(s) contato(s)',
        example: 'João Paulo, joaop@email.com, (99)9999-9999, linkedin / Maria Laura, mairaL@email.com, (99)9999-9999, linkedin',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateCandidateProjectDto.prototype, "contactLeaders", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Este campo recebe um array com IDs das linguagens/ferramentas',
        example: [1, 2, 4, 6, 7],
    }),
    (0, class_validator_1.ArrayNotEmpty)(),
    (0, class_validator_1.IsNumber)({}, { each: true }),
    __metadata("design:type", Array)
], CreateCandidateProjectDto.prototype, "language", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Este campo recebe um array com nomes dos cargos/proficionais',
        example: ['Front-End', 'Back-End', 'QA', 'Product Manager', 'UX', 'UI'],
    }),
    (0, class_validator_1.ArrayNotEmpty)(),
    (0, class_validator_1.IsString)({ each: true }),
    __metadata("design:type", Array)
], CreateCandidateProjectDto.prototype, "professional", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Este campo recebe um array com nomes de outros cargos/proficionais',
        example: ['Tech Lead', 'Product Owner'],
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsString)({ each: true }),
    __metadata("design:type", Array)
], CreateCandidateProjectDto.prototype, "others", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Descreva como a Sou Junior pode apoiar seu projeto',
    }),
    __metadata("design:type", String)
], CreateCandidateProjectDto.prototype, "findyHelp", void 0);
exports.CreateCandidateProjectDto = CreateCandidateProjectDto;
//# sourceMappingURL=create-candidate-project.dto.js.map