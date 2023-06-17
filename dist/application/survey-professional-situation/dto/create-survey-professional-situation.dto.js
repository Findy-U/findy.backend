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
exports.CreateSurveyProfessionalSituationDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateSurveyProfessionalSituationDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Campo para receber a informçaão "Qual sua situação profissão atual?"',
        example: 'Estudante ou estagiário na área de tecnologia',
    }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Campo é obrigatório' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateSurveyProfessionalSituationDto.prototype, "situation", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Campo para receber a informçaão "Qual é sua área de atuação mais recente? (Se aplicável)". Campo não é obrigatório',
        example: 'Engenharia de Software',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateSurveyProfessionalSituationDto.prototype, "ocupationArea", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Campo para receber a informçaão "Qual é o seu objetivo ao participar do projeto da Findy? (Se aplicável)". Campo não é obrigatório',
        example: 'Consolidar os conhecimentos dentro da minha área',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateSurveyProfessionalSituationDto.prototype, "objectives", void 0);
exports.CreateSurveyProfessionalSituationDto = CreateSurveyProfessionalSituationDto;
//# sourceMappingURL=create-survey-professional-situation.dto.js.map