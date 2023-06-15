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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CandidateProjectController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const has_roles_decorator_1 = require("../../common/decorators/has-roles.decorator");
const not_found_error_1 = require("../../common/exceptions/not-found.error");
const jwt_auth_guard_1 = require("../authentication/guards/jwt-auth.guard");
const roles_guard_1 = require("../authentication/guards/roles.guard");
const candidate_project_service_1 = require("./candidate-project.service");
const create_candidate_project_dto_1 = require("./dto/create-candidate-project.dto");
const update_candidate_project_dto_1 = require("./dto/update-candidate-project.dto");
const success_response_1 = require("./swagger/success.response");
const roles_enum_1 = require("../../common/interfaces/authentication/roles.enum");
let CandidateProjectController = class CandidateProjectController {
    constructor(candidateProjectService) {
        this.candidateProjectService = candidateProjectService;
    }
    async create(req, createProjectDto) {
        try {
            const user = req.user;
            return await this.candidateProjectService.create(createProjectDto, user);
        }
        catch (error) {
            if (error.message.includes('Internal')) {
                throw new common_1.InternalServerErrorException(error.message);
            }
            throw new common_1.ConflictException(error.message);
        }
    }
    async findAll() {
        return await this.candidateProjectService.findAll();
    }
    async findAllRolesProject() {
        return await this.candidateProjectService.findAllRolesProject();
    }
    async findAllSkillsProject() {
        return await this.candidateProjectService.findAllSkillsProject();
    }
    async findOne(id) {
        try {
            return await this.candidateProjectService.findOne(+id);
        }
        catch (error) {
            if (error instanceof not_found_error_1.NotFoundError) {
                throw new common_1.NotFoundException(error.message);
            }
            throw new common_1.BadRequestException(error.message);
        }
    }
    async findRolesProject(id) {
        try {
            return await this.candidateProjectService.findByIdRoleProject(+id);
        }
        catch (error) {
            if (error instanceof not_found_error_1.NotFoundError) {
                throw new common_1.NotFoundException(error.message);
            }
            throw new common_1.BadRequestException(error.message);
        }
    }
    async findByIdSkillProject(id) {
        try {
            return await this.candidateProjectService.findByIdSkillProject(+id);
        }
        catch (error) {
            if (error instanceof not_found_error_1.NotFoundError) {
                throw new common_1.NotFoundException(error.message);
            }
            throw new common_1.BadRequestException(error.message);
        }
    }
    async update(id, updateCandidateProjectDto) {
        try {
            await this.candidateProjectService.updateProjectData(+id, updateCandidateProjectDto);
            return { message: 'Update successfully' };
        }
        catch (error) {
            throw new common_1.NotFoundException(error.message);
        }
    }
    async remove(id) {
        try {
            return await this.candidateProjectService.remove(+id);
        }
        catch (error) {
            throw new common_1.NotFoundException(error.message);
        }
    }
};
__decorate([
    (0, has_roles_decorator_1.HasRoles)(roles_enum_1.Role.Candidate, roles_enum_1.Role.Project),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, common_1.Post)(),
    (0, swagger_1.ApiCreatedResponse)(success_response_1.ApiCreatedResponseCreate),
    (0, swagger_1.ApiConflictResponse)(success_response_1.ApiConflictResponseCreate),
    (0, swagger_1.ApiUnauthorizedResponse)({
        description: 'Unauthorized user',
        type: success_response_1.UnauthorizedExceptionError,
    }),
    (0, swagger_1.ApiBearerAuth)(),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_candidate_project_dto_1.CreateCandidateProjectDto]),
    __metadata("design:returntype", Promise)
], CandidateProjectController.prototype, "create", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)(),
    (0, swagger_1.ApiUnauthorizedResponse)({
        description: 'Unauthorized user',
        type: success_response_1.UnauthorizedExceptionError,
    }),
    (0, swagger_1.ApiResponse)(Object.assign(Object.assign({}, success_response_1.ApiResponseFindAll), { type: [success_response_1.ProjectResponseFind] })),
    (0, swagger_1.ApiBearerAuth)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CandidateProjectController.prototype, "findAll", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)('roles'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiResponse)(Object.assign(Object.assign({}, success_response_1.ApiResponseRoles), { type: [success_response_1.RolesResponse] })),
    (0, swagger_1.ApiUnauthorizedResponse)({
        description: 'Unauthorized user',
        type: success_response_1.UnauthorizedExceptionError,
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CandidateProjectController.prototype, "findAllRolesProject", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)('skills'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiResponse)(Object.assign(Object.assign({}, success_response_1.ApiResponseStacks), { type: [success_response_1.StackResponse] })),
    (0, swagger_1.ApiUnauthorizedResponse)({
        description: 'Unauthorized user',
        type: success_response_1.UnauthorizedExceptionError,
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CandidateProjectController.prototype, "findAllSkillsProject", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiResponse)(Object.assign(Object.assign({}, success_response_1.ApiResponseFindById), { type: success_response_1.ProjectResponseFind })),
    (0, swagger_1.ApiUnauthorizedResponse)({
        description: 'Unauthorized user',
        type: success_response_1.UnauthorizedExceptionError,
    }),
    (0, swagger_1.ApiNotFoundResponse)({
        description: 'Erro quando não encontra o projeto no BD',
        type: success_response_1.NotFoundExceptionError,
    }),
    (0, swagger_1.ApiParam)(success_response_1.ApirParamFindById),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CandidateProjectController.prototype, "findOne", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)('roles/:id'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiResponse)(Object.assign(Object.assign({}, success_response_1.ApiResponseRoleById), { type: success_response_1.RolesResponse })),
    (0, swagger_1.ApiUnauthorizedResponse)({
        description: 'Unauthorized user',
        type: success_response_1.UnauthorizedExceptionError,
    }),
    (0, swagger_1.ApiNotFoundResponse)({
        description: 'Erro quando não encontra o projeto no BD',
        type: success_response_1.NotFoundExceptionErrorRoles,
    }),
    (0, swagger_1.ApiParam)(success_response_1.ApirParamRoleFindById),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CandidateProjectController.prototype, "findRolesProject", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)('skills/:id'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiResponse)(Object.assign(Object.assign({}, success_response_1.ApiResponseStackById), { type: success_response_1.StackResponse })),
    (0, swagger_1.ApiUnauthorizedResponse)({
        description: 'Unauthorized user',
        type: success_response_1.UnauthorizedExceptionError,
    }),
    (0, swagger_1.ApiNotFoundResponse)({
        description: 'Erro quando não encontra o projeto no BD',
        type: success_response_1.NotFoundExceptionErrorStacks,
    }),
    (0, swagger_1.ApiParam)(success_response_1.ApirParamStackFindById),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CandidateProjectController.prototype, "findByIdSkillProject", null);
__decorate([
    (0, swagger_1.ApiExcludeEndpoint)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiUnauthorizedResponse)({
        description: 'Unauthorized user',
        type: success_response_1.UnauthorizedExceptionError,
    }),
    (0, swagger_1.ApiNotFoundResponse)({
        description: 'Erro quando não encontra o projeto no BD',
        type: success_response_1.NotFoundExceptionError,
    }),
    (0, swagger_1.ApiBody)({
        type: success_response_1.UpdateDTOSwagger,
        description: 'O body do update pode receber todos os atributos ou parte dos atributos.',
    }),
    (0, swagger_1.ApiParam)(success_response_1.ApirParamFindById),
    (0, swagger_1.ApiResponse)(Object.assign(Object.assign({}, success_response_1.ApiResponseUpdate), { type: success_response_1.UpdateResponse })),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_candidate_project_dto_1.UpdateCandidateProjectDto]),
    __metadata("design:returntype", Promise)
], CandidateProjectController.prototype, "update", null);
__decorate([
    (0, swagger_1.ApiExcludeEndpoint)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiParam)(success_response_1.ApirParamFindById),
    (0, swagger_1.ApiUnauthorizedResponse)({
        description: 'Unauthorized user',
        type: success_response_1.UnauthorizedExceptionError,
    }),
    (0, swagger_1.ApiNotFoundResponse)({
        description: 'Erro quando não encontra o projeto no BD',
        type: success_response_1.NotFoundExceptionError,
    }),
    (0, swagger_1.ApiResponse)(Object.assign(Object.assign({}, success_response_1.ApiResponseDelete), { type: success_response_1.ProjectResponseDelete })),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CandidateProjectController.prototype, "remove", null);
CandidateProjectController = __decorate([
    (0, common_1.Controller)('candidate-projects'),
    (0, swagger_1.ApiTags)('candidate_projects'),
    __metadata("design:paramtypes", [candidate_project_service_1.CandidateProjectService])
], CandidateProjectController);
exports.CandidateProjectController = CandidateProjectController;
//# sourceMappingURL=cadidate-project.controller.js.map