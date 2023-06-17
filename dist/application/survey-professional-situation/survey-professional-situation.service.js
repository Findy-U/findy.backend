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
exports.SurveyProfessionalSituationService = void 0;
const common_1 = require("@nestjs/common");
const conflict_error_1 = require("../../common/exceptions/conflict-error");
const not_found_error_1 = require("../../common/exceptions/not-found.error");
const survey_professional_situation_repository_1 = require("./repositories/survey-professional-situation.repository");
let SurveyProfessionalSituationService = class SurveyProfessionalSituationService {
    constructor(surveyProfessionalRepository) {
        this.surveyProfessionalRepository = surveyProfessionalRepository;
    }
    async create(dataSurvey) {
        const userIdExists = await this.surveyProfessionalRepository.findByIdUser(dataSurvey.candidateUserId);
        if (userIdExists) {
            throw new conflict_error_1.ConflictError('User already has a survey');
        }
        return this.surveyProfessionalRepository.create(dataSurvey);
    }
    async findAll() {
        const surveys = this.surveyProfessionalRepository.findAll();
        if (!surveys) {
            throw new not_found_error_1.NotFoundError('No surveys found');
        }
        return surveys;
    }
    async findById(id) {
        const survey = await this.surveyProfessionalRepository.findById(id);
        if (!survey) {
            throw new not_found_error_1.NotFoundError('Survey not found');
        }
        return survey;
    }
};
SurveyProfessionalSituationService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [survey_professional_situation_repository_1.SurveyProfessionalSituationRepository])
], SurveyProfessionalSituationService);
exports.SurveyProfessionalSituationService = SurveyProfessionalSituationService;
//# sourceMappingURL=survey-professional-situation.service.js.map