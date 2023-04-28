"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CandidateUserModule = void 0;
const common_1 = require("@nestjs/common");
const candidate_user_postgres_repository_1 = require("../../common/repositories/candidate-user/candidate-user-postgres.repository");
const candidate_user_serialize_1 = require("../../common/serializers/candidate-user.serialize");
const prisma_service_1 = require("../../config/database/prisma/prisma.service");
const candidate_user_controller_1 = require("./candidate-user.controller");
const candidate_user_service_1 = require("./candidate-user.service");
const candidate_user_repository_1 = require("./repositories/candidate-user.repository");
let CandidateUserModule = class CandidateUserModule {
};
CandidateUserModule = __decorate([
    (0, common_1.Module)({
        imports: [],
        controllers: [candidate_user_controller_1.CandidateUserController],
        providers: [
            candidate_user_service_1.CandidateUserService,
            candidate_user_serialize_1.CandidateUserSerialize,
            prisma_service_1.PrismaService,
            {
                provide: candidate_user_repository_1.CandidateUserRepository,
                useClass: candidate_user_postgres_repository_1.CandidateUserPostgresRepository,
            },
        ],
    })
], CandidateUserModule);
exports.CandidateUserModule = CandidateUserModule;
//# sourceMappingURL=candidate-user.module.js.map