"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CandidateProfileModule = void 0;
const common_1 = require("@nestjs/common");
const candidate_profile_controller_1 = require("./candidate-profile.controller");
const candidate_profile_service_1 = require("./candidate-profile.service");
const candidate_profile_entity_1 = require("./entities/candidate-profile.entity");
const candidate_profile_postgres_repository_1 = require("../../common/repositories/candidate-profile/candidate-profile-postgres-repository");
const candidate_profile_repository_1 = require("../../application/candidate-profile/repository/candidate-profile.repository");
let CandidateProfileModule = class CandidateProfileModule {
};
CandidateProfileModule = __decorate([
    (0, common_1.Module)({
        controllers: [candidate_profile_controller_1.CandidateProfileController],
        providers: [
            candidate_profile_service_1.CandidateProfileService,
            {
                provide: candidate_profile_repository_1.CandidateProfileRepository,
                useClass: candidate_profile_postgres_repository_1.CandidateProfilePostgresRepository,
            },
            candidate_profile_entity_1.CandidateProfile,
        ],
    })
], CandidateProfileModule);
exports.CandidateProfileModule = CandidateProfileModule;
//# sourceMappingURL=candidate-profile.module.js.map