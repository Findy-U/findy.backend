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
exports.CandidateProjectSqliteRepository = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../../config/database/prisma/prisma.service");
const not_found_error_1 = require("../../exceptions/not-found.error");
let CandidateProjectSqliteRepository = class CandidateProjectSqliteRepository {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(project, user) {
        const rolesArray = project.others
            ? [...project.professional, ...project.others]
            : [...project.professional];
        try {
            const newProject = await this.prisma.candidateProject.create({
                data: {
                    name: project.name,
                    responsible: project.responsible,
                    contactResponsible: project.contactResponsible,
                    urlLinkediResponsible: project.urlLinkediResponsible,
                    urlTeamSelection: project.urlTeamSelection,
                    projectScope: project.projectScope,
                    candidateUserId: user.id,
                    findyHelp: project.findyHelp,
                    contactLeaders: project.contactLeaders,
                },
            });
            await Promise.all(project.language.map(async (item) => {
                await this.prisma.projectStack.create({
                    data: {
                        projectId: newProject.id,
                        stackId: item,
                    },
                });
            }));
            await Promise.all(rolesArray.map(async (item) => {
                await this.prisma.projectRoles.create({
                    data: {
                        projectId: newProject.id,
                        title: item,
                    },
                });
            }));
            return newProject;
        }
        catch (error) {
            console.error(error);
            throw new Error('Internal server error');
        }
    }
    async findAll() {
        return await this.prisma.candidateProject.findMany({
            select: {
                id: true,
                name: true,
                projectScope: true,
                urlTeamSelection: true,
                responsible: true,
                contactResponsible: true,
                urlLinkediResponsible: true,
                findyHelp: true,
                candidateUserId: true,
                contactLeaders: true,
                isActive: true,
                createdAt: true,
                updatedAt: true,
                professional: true,
                language: true,
            },
        });
    }
    async findById(id) {
        const project = await this.prisma.candidateProject.findUnique({
            where: { id },
            include: {
                language: true,
                professional: true,
            },
        });
        if (!project) {
            throw new not_found_error_1.NotFoundError('Project not found');
        }
        return project;
    }
    async findByName(name) {
        return await this.prisma.candidateProject.findUnique({ where: { name } });
    }
    async findAllRolesProject() {
        return await this.prisma.roles.findMany();
    }
    async findByIdRoleProject(id) {
        const role = await this.prisma.roles.findUnique({ where: { id } });
        if (!role) {
            throw new not_found_error_1.NotFoundError('Not found Role');
        }
        return role;
    }
    async findAllSkillsProject() {
        return await this.prisma.stack.findMany();
    }
    async findByIdSkillProject(id) {
        const skill = await this.prisma.stack.findUnique({ where: { id } });
        if (!skill) {
            throw new not_found_error_1.NotFoundError('Not found Skill');
        }
        return skill;
    }
    async update(id, project) {
        const projectExists = await this.findById(id);
        if (!projectExists) {
            throw new not_found_error_1.NotFoundError('Project not found');
        }
        try {
            await this.prisma.candidateProject.update({
                where: { id },
                data: {
                    name: project.name,
                    responsible: project.responsible,
                    urlTeamSelection: project.urlTeamSelection,
                    findyHelp: project.findyHelp,
                    projectScope: project.projectScope,
                },
            });
        }
        catch (error) {
            console.error(error);
        }
    }
    async remove(id) {
        const projectExists = await this.findById(id);
        if (!projectExists) {
            throw new not_found_error_1.NotFoundError('Project not found');
        }
        try {
            await this.prisma.candidateProject.delete({ where: { id } });
            return { message: 'Successfully removed!' };
        }
        catch (error) {
            throw new Error('Não foi possível excluir');
        }
    }
};
CandidateProjectSqliteRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], CandidateProjectSqliteRepository);
exports.CandidateProjectSqliteRepository = CandidateProjectSqliteRepository;
//# sourceMappingURL=candidate-project-sqlite.repository.js.map