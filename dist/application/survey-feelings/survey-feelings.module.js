"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SurveyFeelingsModule = void 0;
const common_1 = require("@nestjs/common");
const survey_feelings_service_1 = require("./survey-feelings.service");
const survey_feelings_controller_1 = require("./survey-feelings.controller");
const prisma_service_1 = require("../../config/database/prisma/prisma.service");
const survey_feelings_sqlite_repository_1 = require("../../common/repositories/survey-feelings/survey-feelings-sqlite.repository");
const survey_feelings_repository_1 = require("./repositories/survey-feelings.repository");
const survey_feelings_serialize_1 = require("../../common/serializers/survey-feelings.serialize");
let SurveyFeelingsModule = class SurveyFeelingsModule {
};
SurveyFeelingsModule = __decorate([
    (0, common_1.Module)({
        controllers: [survey_feelings_controller_1.SurveyFeelingsController],
        providers: [
            survey_feelings_service_1.SurveyFeelingsService,
            survey_feelings_serialize_1.SurveyFeelingsSerialize,
            prisma_service_1.PrismaService,
            {
                provide: survey_feelings_repository_1.SurveyFeelingsRepository,
                useClass: survey_feelings_sqlite_repository_1.SurveyFeelingsSqliteRepository,
            },
        ],
    })
], SurveyFeelingsModule);
exports.SurveyFeelingsModule = SurveyFeelingsModule;
//# sourceMappingURL=survey-feelings.module.js.map