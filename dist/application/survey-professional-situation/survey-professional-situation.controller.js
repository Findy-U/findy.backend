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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SurveyProfessionalSituationController = void 0;
const common_1 = require("@nestjs/common");
const jwt_auth_guard_1 = require("../authentication/guards/jwt-auth.guard");
const create_survey_professional_situation_dto_1 = require("./dto/create-survey-professional-situation.dto");
const survey_professional_situation_service_1 = require("./survey-professional-situation.service");
const swagger_1 = require("@nestjs/swagger");
const success_response_1 = require("./swagger/success.response");
let SurveyProfessionalSituationController = class SurveyProfessionalSituationController {
    constructor(surveyProfessionalSituationService) {
        this.surveyProfessionalSituationService = surveyProfessionalSituationService;
    }
    async create(createSurveyProfessionalSituationDto, req) {
        const { id } = req.user;
        try {
            return await this.surveyProfessionalSituationService.create(Object.assign({ candidateUserId: id }, createSurveyProfessionalSituationDto));
        }
        catch (error) {
            throw new common_1.ConflictException(error.message);
        }
    }
    async findAll() {
        return await this.surveyProfessionalSituationService.findAll();
    }
    async findById(id) {
        return await this.surveyProfessionalSituationService.findById(+id);
    }
};
__decorate([
    (0, swagger_1.ApiCreatedResponse)(success_response_1.ApiProfessionalSituationCreatedResponseCreate),
    (0, swagger_1.ApiUnauthorizedResponse)({
        description: 'Unauthorized user',
        type: success_response_1.UnauthorizedExceptionError,
    }),
    (0, swagger_1.ApiConflictResponse)(success_response_1.ApiProfessionalSituationConflictResponseCreate),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_survey_professional_situation_dto_1.CreateSurveyProfessionalSituationDto, Object]),
    __metadata("design:returntype", Promise)
], SurveyProfessionalSituationController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiExcludeEndpoint)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SurveyProfessionalSituationController.prototype, "findAll", null);
__decorate([
    (0, swagger_1.ApiExcludeEndpoint)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SurveyProfessionalSituationController.prototype, "findById", null);
SurveyProfessionalSituationController = __decorate([
    (0, common_1.Controller)('survey-professional-situation'),
    __metadata("design:paramtypes", [survey_professional_situation_service_1.SurveyProfessionalSituationService])
], SurveyProfessionalSituationController);
exports.SurveyProfessionalSituationController = SurveyProfessionalSituationController;
//# sourceMappingURL=survey-professional-situation.controller.js.map