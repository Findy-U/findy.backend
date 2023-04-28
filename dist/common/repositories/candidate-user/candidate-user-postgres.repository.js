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
exports.CandidateUserPostgresRepository = void 0;
const common_1 = require("@nestjs/common");
const bcrypt = require("bcrypt");
const prisma_postgres_service_1 = require("../../../config/database/prisma/prisma-postgres.service");
const auth_provider_enum_1 = require("../../../models/auth-provider.enum");
const roles_enum_1 = require("../../../models/roles.enum");
const constants_1 = require("../../constants/constants");
const candidate_user_serialize_1 = require("../../serializers/candidate-user.serialize");
let CandidateUserPostgresRepository = class CandidateUserPostgresRepository {
    constructor(prisma, candidateUserSerialize) {
        this.prisma = prisma;
        this.candidateUserSerialize = candidateUserSerialize;
    }
    async create(candidate) {
        let pwdHashed = '';
        if (candidate.password) {
            pwdHashed = await bcrypt.hash(candidate.password, constants_1.SALT_BCRYPT);
        }
        const data = this.candidateUserSerialize.requestToDb(Object.assign(Object.assign({}, candidate), { password: pwdHashed, roles: roles_enum_1.Role.Candidate, provider: candidate.provider
                ? candidate.provider
                : auth_provider_enum_1.AuthProviderType.findy, providerId: candidate.providerId ? candidate.providerId : null }));
        return await this.prisma.candidateUser.create({ data });
    }
    async findAll() {
        return await this.prisma.candidateUser.findMany({
            include: {
                CandidateProfile: true,
            },
        });
    }
    async findById(id) {
        return await this.prisma.candidateUser.findUnique({
            where: { id },
            include: { CandidateProfile: true },
        });
    }
    async findByEmail(email) {
        return await this.prisma.candidateUser.findUnique({ where: { email } });
    }
    async update(id, cadidate) {
        return await this.prisma.candidateUser.update({
            where: { id },
            data: cadidate,
        });
    }
    remove(id) {
        throw new Error('Method not implemented.');
    }
};
CandidateUserPostgresRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_postgres_service_1.PrismaPostgresService,
        candidate_user_serialize_1.CandidateUserSerialize])
], CandidateUserPostgresRepository);
exports.CandidateUserPostgresRepository = CandidateUserPostgresRepository;
//# sourceMappingURL=candidate-user-postgres.repository.js.map