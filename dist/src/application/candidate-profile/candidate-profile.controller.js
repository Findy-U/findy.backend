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
exports.CandidateProfileController = void 0;
const common_1 = require("@nestjs/common");
const common_2 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const candidate_profile_service_1 = require("./candidate-profile.service");
const create_candidate_profile_dto_1 = require("./dto/create-candidate-profile.dto");
const update_candidate_profile_dto_1 = require("./dto/update-candidate-profile.dto");
const jwt_auth_guard_1 = require("../../common/guards/jwt-auth.guard");
const success_response_1 = require("./swagger/success.response");
const success_response_2 = require("./swagger/success.response");
const not_found_error_1 = require("../../common/exceptions/not-found.error");
const conflict_error_1 = require("../../common/exceptions/conflict-error");
let CandidateProfileController = class CandidateProfileController {
    constructor(candidateProfileService) {
        this.candidateProfileService = candidateProfileService;
    }
    async create(createCandidateProfileDto) {
        try {
            return await this.candidateProfileService.create(createCandidateProfileDto);
        }
        catch (error) {
            if (error instanceof not_found_error_1.NotFoundError) {
                throw new common_1.NotFoundException(error.message);
            }
            if (error instanceof conflict_error_1.ConflictError) {
                throw new common_1.ConflictException(error.message);
            }
            throw new common_2.InternalServerErrorException('Server error please try again');
        }
    }
    async findAll() {
        return await this.candidateProfileService.findAll();
    }
    async findOne(id) {
        try {
            return await this.candidateProfileService.findOne(+id);
        }
        catch (error) {
            throw new common_1.NotFoundException(error.message);
        }
    }
    update(id, updateCandidateProfileDto) {
        return this.candidateProfileService.update(+id, updateCandidateProfileDto);
    }
    remove(id) {
        return this.candidateProfileService.remove(+id);
    }
};
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)(),
    (0, swagger_1.ApiCreatedResponse)(success_response_1.ApiProfileCreatedResponseCreate),
    (0, swagger_1.ApiUnauthorizedResponse)({
        description: 'Unauthorized user',
        type: success_response_1.UnauthorizedExceptionError,
    }),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiConflictResponse)({
        type: success_response_1.ProfileConflictExceptionError,
    }),
    (0, swagger_1.ApiNotFoundResponse)({
        type: success_response_1.CandidateUserNotFoundExceptionError,
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_candidate_profile_dto_1.CreateCandidateProfileDto]),
    __metadata("design:returntype", Promise)
], CandidateProfileController.prototype, "create", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)(),
    (0, swagger_1.ApiUnauthorizedResponse)({
        description: 'Unauthorized user',
        type: success_response_1.UnauthorizedExceptionError,
    }),
    (0, swagger_1.ApiResponse)(Object.assign(Object.assign({}, success_response_1.ApiProfileResponseFindAll), { type: [success_response_2.ProfileResponseFind] })),
    (0, swagger_1.ApiBearerAuth)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CandidateProfileController.prototype, "findAll", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiResponse)(Object.assign(Object.assign({}, success_response_1.ApiProfileResponseFindAll), { type: success_response_2.ProfileResponseFind })),
    (0, swagger_1.ApiUnauthorizedResponse)({
        description: 'Unauthorized user',
        type: success_response_1.UnauthorizedExceptionError,
    }),
    (0, swagger_1.ApiNotFoundResponse)({
        description: 'Erro quando não encontra o projeto no BD',
        type: success_response_1.ProfileNotFoundExceptionError,
    }),
    (0, swagger_1.ApiParam)(success_response_1.ApiProfileParamFindById),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CandidateProfileController.prototype, "findOne", null);
__decorate([
    (0, swagger_1.ApiExcludeEndpoint)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_candidate_profile_dto_1.UpdateCandidateProfileDto]),
    __metadata("design:returntype", void 0)
], CandidateProfileController.prototype, "update", null);
__decorate([
    (0, swagger_1.ApiExcludeEndpoint)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CandidateProfileController.prototype, "remove", null);
CandidateProfileController = __decorate([
    (0, common_1.Controller)('candidate-profile'),
    (0, swagger_1.ApiTags)('candidate_profile'),
    __metadata("design:paramtypes", [candidate_profile_service_1.CandidateProfileService])
], CandidateProfileController);
exports.CandidateProfileController = CandidateProfileController;
//# sourceMappingURL=candidate-profile.controller.js.map