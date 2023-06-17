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
exports.SurveyFeelingsController = void 0;
const common_1 = require("@nestjs/common");
const survey_feelings_service_1 = require("./survey-feelings.service");
const create_survey_feelings_dto_1 = require("./dto/create-survey-feelings.dto");
const swagger_1 = require("@nestjs/swagger");
const jwt_auth_guard_1 = require("../authentication/guards/jwt-auth.guard");
const swagger_responses_1 = require("./swagger/swagger.responses");
let SurveyFeelingsController = class SurveyFeelingsController {
    constructor(surveyFeelingsService) {
        this.surveyFeelingsService = surveyFeelingsService;
    }
    async create(createSurveyFeelingsDto, req) {
        try {
            const userAnswers = Object.assign(Object.assign({}, createSurveyFeelingsDto), { candidateUserId: req.user.id });
            return await this.surveyFeelingsService.create(userAnswers);
        }
        catch (error) {
            console.log(error);
            throw new common_1.ConflictException(error.message);
        }
    }
    async findAll() {
        return await this.surveyFeelingsService.findAll();
    }
    async findById(id) {
        try {
            return await this.surveyFeelingsService.findById(+id);
        }
        catch (error) {
            throw new common_1.NotFoundException(error.message);
        }
    }
};
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)(),
    (0, swagger_1.ApiCreatedResponse)(swagger_responses_1.ApiCreatedResponseCreate),
    (0, swagger_1.ApiConflictResponse)(swagger_responses_1.ApiConflictResponseCreate),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiUnauthorizedResponse)({
        description: 'Unauthorized user',
        type: swagger_responses_1.UnauthorizedExceptionError,
    }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_survey_feelings_dto_1.CreateSurveyFeelingsDto, Object]),
    __metadata("design:returntype", Promise)
], SurveyFeelingsController.prototype, "create", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)(),
    (0, swagger_1.ApiExcludeEndpoint)(),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiResponse)(Object.assign(Object.assign({}, swagger_responses_1.ApiResponseFindAll), { type: [swagger_responses_1.ResponseFind] })),
    (0, swagger_1.ApiUnauthorizedResponse)({
        description: 'Unauthorized user',
        type: swagger_responses_1.UnauthorizedExceptionError,
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SurveyFeelingsController.prototype, "findAll", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiExcludeEndpoint)(),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiResponse)(Object.assign(Object.assign({}, swagger_responses_1.ApiResponseFindById), { type: swagger_responses_1.ResponseFind })),
    (0, swagger_1.ApiNotFoundResponse)({
        description: 'Erro quando não encontra o registro no BD',
        type: swagger_responses_1.NotFoundExceptionError,
    }),
    (0, swagger_1.ApiUnauthorizedResponse)({
        description: 'Unauthorized user',
        type: swagger_responses_1.UnauthorizedExceptionError,
    }),
    (0, swagger_1.ApiParam)(swagger_responses_1.ApiParamFindById),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SurveyFeelingsController.prototype, "findById", null);
SurveyFeelingsController = __decorate([
    (0, common_1.Controller)('survey-feelings'),
    (0, swagger_1.ApiTags)('survey-feelings'),
    __metadata("design:paramtypes", [survey_feelings_service_1.SurveyFeelingsService])
], SurveyFeelingsController);
exports.SurveyFeelingsController = SurveyFeelingsController;
//# sourceMappingURL=survey-feelings.controller.js.map