"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CandidateUserDetailsModule = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../config/database/prisma/prisma.service");
const candidate_user_details_service_1 = require("./candidate-user-details.service");
const candidate_user_details_controller_1 = require("./candidate-user-details.controller");
const candidate_user_details_repository_1 = require("./repositories/candidate-user-details.repository");
const candidate_user_details_sqlite_repository_1 = require("../../common/repositories/candidate-user-details/candidate-user-details-sqlite.repository");
const candidate_user_details_serialize_1 = require("../../common/serializers/candidate-user-details.serialize");
let CandidateUserDetailsModule = class CandidateUserDetailsModule {
};
CandidateUserDetailsModule = __decorate([
    (0, common_1.Module)({
        controllers: [candidate_user_details_controller_1.CandidateUserDetailsController],
        providers: [
            candidate_user_details_service_1.CandidateUserDetailsService,
            candidate_user_details_serialize_1.CandidateUserDetailsSerialize,
            prisma_service_1.PrismaService,
            {
                provide: candidate_user_details_repository_1.CandidateUserDetailsRepository,
                useClass: candidate_user_details_sqlite_repository_1.CandidateUserDetailsSqliteRepository,
            },
        ],
    })
], CandidateUserDetailsModule);
exports.CandidateUserDetailsModule = CandidateUserDetailsModule;
//# sourceMappingURL=candidate-user-details.module.js.map