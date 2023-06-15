"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SurveyMarketInformationModule = void 0;
const common_1 = require("@nestjs/common");
const survey_market_information_service_1 = require("./survey-market-information.service");
const survey_market_information_controller_1 = require("./survey-market-information.controller");
const survey_market_information_repository_1 = require("./repositories/survey-market-information.repository");
const survey_market_info_sqlite_repository_1 = require("../../common/repositories/survey-market-information/survey-market-info-sqlite.repository");
let SurveyMarketInformationModule = class SurveyMarketInformationModule {
};
SurveyMarketInformationModule = __decorate([
    (0, common_1.Module)({
        controllers: [survey_market_information_controller_1.SurveyMarketInformationController],
        providers: [
            survey_market_information_service_1.SurveyMarketInformationService,
            {
                provide: survey_market_information_repository_1.SurveyMarketInformationRepository,
                useClass: survey_market_info_sqlite_repository_1.SurveyMarketInformationSqliteRepository,
            },
        ],
    })
], SurveyMarketInformationModule);
exports.SurveyMarketInformationModule = SurveyMarketInformationModule;
//# sourceMappingURL=survey-market-information.module.js.map