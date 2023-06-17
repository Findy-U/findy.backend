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
exports.SurveyFeelingsService = void 0;
const common_1 = require("@nestjs/common");
const survey_feelings_repository_1 = require("./repositories/survey-feelings.repository");
const not_found_error_1 = require("../../common/exceptions/not-found.error");
const survey_feelings_serialize_1 = require("../../common/serializers/survey-feelings.serialize");
let SurveyFeelingsService = class SurveyFeelingsService {
    constructor(surveyFeelingsSerialize, surveyFeelingsRepository) {
        this.surveyFeelingsSerialize = surveyFeelingsSerialize;
        this.surveyFeelingsRepository = surveyFeelingsRepository;
    }
    async create(survey) {
        const candidateUserId = await this.surveyFeelingsRepository.findOne(survey.candidateUserId);
        if (candidateUserId) {
            throw new Error('this user already has registered survey answers');
        }
        const userAnswers = await this.surveyFeelingsRepository.create(survey);
        return this.surveyFeelingsSerialize.dbToResponseCreate(userAnswers);
    }
    async findAll() {
        const userAnswers = await this.surveyFeelingsRepository.findAll();
        return userAnswers.map((userAnswers) => this.surveyFeelingsSerialize.dbToResponseAll(userAnswers));
    }
    async findById(id) {
        const userAnswers = await this.surveyFeelingsRepository.findById(id);
        if (!userAnswers) {
            throw new not_found_error_1.NotFoundError('Candidate not found');
        }
        return this.surveyFeelingsSerialize.dbToResponseOne(userAnswers);
    }
};
SurveyFeelingsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [survey_feelings_serialize_1.SurveyFeelingsSerialize,
        survey_feelings_repository_1.SurveyFeelingsRepository])
], SurveyFeelingsService);
exports.SurveyFeelingsService = SurveyFeelingsService;
//# sourceMappingURL=survey-feelings.service.js.map