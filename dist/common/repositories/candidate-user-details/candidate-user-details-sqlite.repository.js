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
exports.CandidateUserDetailsSqliteRepository = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../../config/database/prisma/prisma.service");
let CandidateUserDetailsSqliteRepository = class CandidateUserDetailsSqliteRepository {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(candidate) {
        return await this.prisma.candidateUserDetails.create({
            data: {
                gender: candidate.gender,
                birthDate: new Date(candidate.birthDate),
                residencePlace: candidate.residencePlace,
                candidateUserId: candidate.candidateUserId,
            },
        });
    }
    async findAll() {
        return await this.prisma.candidateUserDetails.findMany();
    }
    async findById(id) {
        return await this.prisma.candidateUserDetails.findUnique({
            where: { id },
            include: {
                CandidateUser: true,
            },
        });
    }
    async findUnique(candidateUserId) {
        return await this.prisma.candidateUserDetails.findUnique({
            where: { candidateUserId },
        });
    }
    async update(id, details) {
        return await this.prisma.candidateUserDetails.update({
            where: { id },
            data: {
                gender: details.gender,
                birthDate: new Date(details.birthDate),
                residencePlace: details.residencePlace,
                candidateUserId: details.candidateUserId,
            },
        });
    }
};
CandidateUserDetailsSqliteRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], CandidateUserDetailsSqliteRepository);
exports.CandidateUserDetailsSqliteRepository = CandidateUserDetailsSqliteRepository;
//# sourceMappingURL=candidate-user-details-sqlite.repository.js.map