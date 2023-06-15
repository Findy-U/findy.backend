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
exports.SurveyMarketInformationService = void 0;
const common_1 = require("@nestjs/common");
const survey_market_information_repository_1 = require("./repositories/survey-market-information.repository");
const conflict_error_1 = require("../../common/exceptions/conflict-error");
const not_found_error_1 = require("../../common/exceptions/not-found.error");
let SurveyMarketInformationService = class SurveyMarketInformationService {
    constructor(surveyMarketRepository) {
        this.surveyMarketRepository = surveyMarketRepository;
    }
    async create(dataSurvey) {
        const userIdExists = await this.surveyMarketRepository.findByIdUser(dataSurvey.candidateUserId);
        if (userIdExists) {
            throw new conflict_error_1.ConflictError('User already has a survey');
        }
        return this.surveyMarketRepository.create(dataSurvey);
    }
    findAll() {
        return this.surveyMarketRepository.findAll();
    }
    findOne(id) {
        const survey = this.surveyMarketRepository.findOne(id);
        if (!survey) {
            throw new not_found_error_1.NotFoundError('Survey not found');
        }
        return survey;
    }
    update(id, updateSurveyMarketInformationDto) {
        return `This action updates a #${id} surveyMarketInformation`;
    }
    remove(id) {
        return `This action removes a #${id} surveyMarketInformation`;
    }
};
SurveyMarketInformationService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [survey_market_information_repository_1.SurveyMarketInformationRepository])
], SurveyMarketInformationService);
exports.SurveyMarketInformationService = SurveyMarketInformationService;
//# sourceMappingURL=survey-market-information.service.js.map