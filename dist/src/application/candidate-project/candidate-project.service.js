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
exports.CandidateProjectService = void 0;
const common_1 = require("@nestjs/common");
const bad_request_error_1 = require("../../common/exceptions/bad-request.error");
const conflict_error_1 = require("../../common/exceptions/conflict-error");
const candidate_project_repository_1 = require("./repositories/candidate-project.repository");
let CandidateProjectService = class CandidateProjectService {
    constructor(candidateProjectRepository) {
        this.candidateProjectRepository = candidateProjectRepository;
    }
    async create(createProject, user) {
        const projectExists = await this.candidateProjectRepository.findByName(createProject.name);
        if (projectExists) {
            throw new conflict_error_1.ConflictError('Project name already exists');
        }
        return await this.candidateProjectRepository.create(createProject, user);
    }
    findAll() {
        return this.candidateProjectRepository.findAll();
    }
    findOne(id) {
        return this.candidateProjectRepository.findById(id);
    }
    async findAllRolesProject() {
        return await this.candidateProjectRepository.findAllRolesProject();
    }
    async findByIdRoleProject(id) {
        return await this.candidateProjectRepository.findByIdRoleProject(id);
    }
    async findAllSkillsProject() {
        return await this.candidateProjectRepository.findAllSkillsProject();
    }
    async findByIdSkillProject(id) {
        return this.candidateProjectRepository.findByIdSkillProject(id);
    }
    async updateProjectData(id, updateProjectDto) {
        if (!id) {
            throw new bad_request_error_1.BadRequestError('The ID was not informed, please inform!');
        }
        await this.candidateProjectRepository.update(id, updateProjectDto);
    }
    async remove(id) {
        if (!id) {
            throw new bad_request_error_1.BadRequestError('The ID was not informed, please inform!');
        }
        return this.candidateProjectRepository.remove(id);
    }
};
CandidateProjectService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [candidate_project_repository_1.CandidateProjectRepository])
], CandidateProjectService);
exports.CandidateProjectService = CandidateProjectService;
//# sourceMappingURL=candidate-project.service.js.map