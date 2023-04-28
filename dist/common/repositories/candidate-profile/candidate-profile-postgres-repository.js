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
exports.CandidateProfilePostgresRepository = void 0;
const common_1 = require("@nestjs/common");
const prisma_postgres_service_1 = require("../../../config/database/prisma/prisma-postgres.service");
const not_found_error_1 = require("../../exceptions/not-found.error");
const conflict_error_1 = require("../../exceptions/conflict-error");
let CandidateProfilePostgresRepository = class CandidateProfilePostgresRepository {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(profile) {
        const areaArray = profile.others
            ? [...profile.occupationArea, ...profile.others]
            : [...profile.occupationArea];
        const userExists = await this.prisma.candidateUser.findUnique({
            where: { id: profile.candidateUserId },
        });
        if (!userExists) {
            throw new not_found_error_1.NotFoundError('Candidate user not found');
        }
        const profileExists = await this.prisma.candidateProfile.findFirst({
            where: { candidateUserId: profile.candidateUserId },
        });
        console.info(profileExists);
        if (profileExists) {
            throw new conflict_error_1.ConflictError('There is already a profile registered for this user');
        }
        try {
            const newProfile = await this.prisma.candidateProfile.create({
                data: {
                    description: profile.description,
                    phone: profile.phone,
                    urlGithub: profile.urlGithub,
                    urlLinkedin: profile.urlLinkedin,
                    availableTime: profile.availableTime,
                    areaOfInterest: profile.areaOfInterest,
                    candidateUserId: profile.candidateUserId,
                },
            });
            await Promise.all(areaArray.map(async (area) => {
                await this.prisma.occupationArea.create({
                    data: {
                        title: area,
                        profileId: newProfile.id,
                        userId: newProfile.candidateUserId,
                    },
                });
            }));
            await Promise.all(profile.profileSkills.map(async (skill) => {
                await this.prisma.profileSkills.create({
                    data: {
                        stackId: skill,
                        profileId: newProfile.id,
                    },
                });
            }));
            return newProfile;
        }
        catch (error) {
            console.error(error);
        }
    }
    async findAll() {
        return await this.prisma.candidateProfile.findMany({
            include: {
                candidateUser: {
                    select: {
                        id: true,
                        name: true,
                        email: true,
                        password: false,
                        roles: true,
                        provider: true,
                        providerId: true,
                        createdAt: true,
                        updatedAt: true,
                        recoverToken: true,
                    },
                },
                occupationArea: true,
                profileSkills: true,
            },
        });
    }
    async findById(id) {
        const profile = await this.prisma.candidateProfile.findUnique({
            where: { id },
            include: {
                candidateUser: {
                    select: {
                        id: true,
                        name: true,
                        email: true,
                        password: false,
                        roles: true,
                        provider: true,
                        providerId: true,
                        createdAt: true,
                        updatedAt: true,
                        recoverToken: true,
                    },
                },
                occupationArea: true,
                profileSkills: true,
            },
        });
        return profile;
    }
    async update(id, profile) {
        throw new Error('Method not implemented.');
    }
    async remove(id) {
        await this.prisma.candidateProfile.delete({ where: { id } });
    }
};
CandidateProfilePostgresRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_postgres_service_1.PrismaPostgresService])
], CandidateProfilePostgresRepository);
exports.CandidateProfilePostgresRepository = CandidateProfilePostgresRepository;
//# sourceMappingURL=candidate-profile-postgres-repository.js.map