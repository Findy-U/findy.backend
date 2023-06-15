"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CandidateProjectModule = void 0;
const common_1 = require("@nestjs/common");
const candidate_project_sqlite_repository_1 = require("../../common/repositories/candidate-project/candidate-project-sqlite.repository");
const prisma_service_1 = require("../../config/database/prisma/prisma.service");
const cadidate_project_controller_1 = require("./cadidate-project.controller");
const candidate_project_service_1 = require("./candidate-project.service");
const candidate_project_repository_1 = require("./repositories/candidate-project.repository");
let CandidateProjectModule = class CandidateProjectModule {
};
CandidateProjectModule = __decorate([
    (0, common_1.Module)({
        controllers: [cadidate_project_controller_1.CandidateProjectController],
        providers: [
            candidate_project_service_1.CandidateProjectService,
            prisma_service_1.PrismaService,
            {
                provide: candidate_project_repository_1.CandidateProjectRepository,
                useClass: candidate_project_sqlite_repository_1.CandidateProjectSqliteRepository,
            },
        ],
    })
], CandidateProjectModule);
exports.CandidateProjectModule = CandidateProjectModule;
//# sourceMappingURL=candidate-project.module.js.map