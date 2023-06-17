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
exports.SurveyMarketInformationController = void 0;
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const swagger_1 = require("@nestjs/swagger");
const conflict_error_1 = require("../../common/exceptions/conflict-error");
const not_found_error_1 = require("../../common/exceptions/not-found.error");
const create_survey_market_information_dto_1 = require("./dto/create-survey-market-information.dto");
const update_survey_market_information_dto_1 = require("./dto/update-survey-market-information.dto");
const survey_market_information_service_1 = require("./survey-market-information.service");
const success_response_1 = require("./swagger/success.response");
let SurveyMarketInformationController = class SurveyMarketInformationController {
    constructor(surveyMarketInformationService) {
        this.surveyMarketInformationService = surveyMarketInformationService;
    }
    async create(body, req) {
        try {
            body.candidateUserId = req.user['id'];
            return await this.surveyMarketInformationService.create(body);
        }
        catch (error) {
            if (error instanceof conflict_error_1.ConflictError) {
                throw new common_1.ConflictException(error.message);
            }
            console.error(error);
            throw new common_1.InternalServerErrorException('Server error please try again');
        }
    }
    findAll() {
        return this.surveyMarketInformationService.findAll();
    }
    findOne(id) {
        try {
            return this.surveyMarketInformationService.findOne(+id);
        }
        catch (error) {
            if (error instanceof not_found_error_1.NotFoundError) {
                throw new common_1.NotFoundException(error.message);
            }
            throw new common_1.InternalServerErrorException();
        }
    }
    update(id, updateSurveyMarketInformationDto) {
        return this.surveyMarketInformationService.update(+id, updateSurveyMarketInformationDto);
    }
    remove(id) {
        return this.surveyMarketInformationService.remove(+id);
    }
};
__decorate([
    (0, swagger_1.ApiCreatedResponse)(success_response_1.ApiMarketInformationCreatedResponseCreate),
    (0, swagger_1.ApiUnauthorizedResponse)({
        description: 'Unauthorized user',
        type: success_response_1.UnauthorizedExceptionError,
    }),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiConflictResponse)(success_response_1.ApiMarketInformationConflictResponseCreate),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_survey_market_information_dto_1.CreateSurveyMarketInformationDto, Object]),
    __metadata("design:returntype", Promise)
], SurveyMarketInformationController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiExcludeEndpoint)(),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], SurveyMarketInformationController.prototype, "findAll", null);
__decorate([
    (0, swagger_1.ApiExcludeEndpoint)(),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SurveyMarketInformationController.prototype, "findOne", null);
__decorate([
    (0, swagger_1.ApiExcludeEndpoint)(),
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_survey_market_information_dto_1.UpdateSurveyMarketInformationDto]),
    __metadata("design:returntype", void 0)
], SurveyMarketInformationController.prototype, "update", null);
__decorate([
    (0, swagger_1.ApiExcludeEndpoint)(),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SurveyMarketInformationController.prototype, "remove", null);
SurveyMarketInformationController = __decorate([
    (0, swagger_1.ApiTags)('survey-market-information'),
    (0, common_1.Controller)('survey-market-information'),
    __metadata("design:paramtypes", [survey_market_information_service_1.SurveyMarketInformationService])
], SurveyMarketInformationController);
exports.SurveyMarketInformationController = SurveyMarketInformationController;
//# sourceMappingURL=survey-market-information.controller.js.map