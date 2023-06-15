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
exports.CreateSurveyMarketInformationDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateSurveyMarketInformationDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Campo para receber a informçaão "Como você ficou sabendo sobre a Findy?"',
        example: 'Linkedin',
    }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Campo é obrigatório' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateSurveyMarketInformationDto.prototype, "metFindy", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Campo para receber a informação se caso foi indicado por uma amigo. O mesmo não é obrigatório, somente em caso de ouver indicação!',
        example: 'Jonh Doe',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateSurveyMarketInformationDto.prototype, "friendName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Campo para receber a informação se caso foi indicado por uma amigo. O mesmo não é obrigatório, somente em caso de ouver indicação!',
        example: 'jonhdoe@email.com',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateSurveyMarketInformationDto.prototype, "friendEmail", void 0);
exports.CreateSurveyMarketInformationDto = CreateSurveyMarketInformationDto;
//# sourceMappingURL=create-survey-market-information.dto.js.map