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
exports.CandidateUserDetailsPostgresRepository = void 0;
const common_1 = require("@nestjs/common");
const prisma_postgres_service_1 = require("../../../config/database/prisma/prisma-postgres.service");
let CandidateUserDetailsPostgresRepository = class CandidateUserDetailsPostgresRepository {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(candidate) {
        const data = Object.assign(Object.assign({}, candidate), { gender: candidate.gender, birthDate: candidate.birthDate, residencePlace: candidate.residencePlace });
        return await this.prisma.candidateUserDetails.create({ data });
    }
    async findAll() {
        return await this.prisma.candidateUserDetails.findMany();
    }
    async findById(id) {
        return await this.prisma.candidateUserDetails.findUnique({
            where: { id },
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
CandidateUserDetailsPostgresRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_postgres_service_1.PrismaPostgresService])
], CandidateUserDetailsPostgresRepository);
exports.CandidateUserDetailsPostgresRepository = CandidateUserDetailsPostgresRepository;
//# sourceMappingURL=candidate-user-details-postgres.repository.js.map