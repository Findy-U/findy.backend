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
exports.CandidateUserDetailsController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const jwt_auth_guard_1 = require("../authentication/guards/jwt-auth.guard");
const swagger_responses_1 = require("../candidate-user-details/swagger/swagger.responses");
const candidate_user_details_service_1 = require("./candidate-user-details.service");
const create_candidate_user_details_dto_1 = require("./dto/create-candidate-user-details.dto");
const update_candidate_user_details_dto_1 = require("./dto/update-candidate-user-details.dto");
let CandidateUserDetailsController = class CandidateUserDetailsController {
    constructor(candidateUserDetailsService) {
        this.candidateUserDetailsService = candidateUserDetailsService;
    }
    async create(createCandidateUserDetailsDto, req) {
        try {
            const userData = Object.assign(Object.assign({}, createCandidateUserDetailsDto), { candidateUserId: req.user.id });
            return await this.candidateUserDetailsService.create(userData);
        }
        catch (error) {
            console.log(error);
            throw new common_1.ConflictException(error.message);
        }
    }
    async findAll() {
        return this.candidateUserDetailsService.findAll();
    }
    async findOne(id) {
        try {
            return await this.candidateUserDetailsService.findOne(+id);
        }
        catch (error) {
            throw new common_1.NotFoundException(error.message);
        }
    }
    async update(id, updateCandidateUserDetailsDto) {
        try {
            return this.candidateUserDetailsService.update(+id, updateCandidateUserDetailsDto);
        }
        catch (error) {
            throw new common_1.NotFoundException(error.message);
        }
    }
};
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)(),
    (0, swagger_1.ApiCreatedResponse)(swagger_responses_1.ApiCreatedResponseCreate),
    (0, swagger_1.ApiConflictResponse)(swagger_responses_1.ApiConflictResponseCreate),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiUnauthorizedResponse)({
        description: 'Unauthorized user',
        type: swagger_responses_1.UnauthorizedExceptionError,
    }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_candidate_user_details_dto_1.CreateCandidateUserDetailsDto, Object]),
    __metadata("design:returntype", Promise)
], CandidateUserDetailsController.prototype, "create", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)(),
    (0, swagger_1.ApiExcludeEndpoint)(),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiResponse)(Object.assign(Object.assign({}, swagger_responses_1.ApiResponseFindAll), { type: [swagger_responses_1.ResponseFind] })),
    (0, swagger_1.ApiUnauthorizedResponse)({
        description: 'Unauthorized user',
        type: swagger_responses_1.UnauthorizedExceptionError,
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CandidateUserDetailsController.prototype, "findAll", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiExcludeEndpoint)(),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiResponse)(Object.assign(Object.assign({}, swagger_responses_1.ApiResponseFindById), { type: swagger_responses_1.ResponseFind })),
    (0, swagger_1.ApiNotFoundResponse)({
        description: 'Erro quando não encontra o registro no BD',
        type: swagger_responses_1.NotFoundExceptionError,
    }),
    (0, swagger_1.ApiUnauthorizedResponse)({
        description: 'Unauthorized user',
        type: swagger_responses_1.UnauthorizedExceptionError,
    }),
    (0, swagger_1.ApiParam)(swagger_responses_1.ApiParamFindById),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CandidateUserDetailsController.prototype, "findOne", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiExcludeEndpoint)(),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiResponse)(Object.assign(Object.assign({}, swagger_responses_1.ApiResponseUpdate), { type: swagger_responses_1.UpdateResponse })),
    (0, swagger_1.ApiNotFoundResponse)({
        description: 'Usuário não encontrado',
        type: swagger_responses_1.NotFoundExceptionError,
    }),
    (0, swagger_1.ApiUnauthorizedResponse)({
        description: 'Unauthorized user',
        type: swagger_responses_1.UnauthorizedExceptionError,
    }),
    (0, swagger_1.ApiParam)(swagger_responses_1.ApiParamFindById),
    (0, swagger_1.ApiBody)({
        type: swagger_responses_1.UpdateDTOSwagger,
        description: 'O body do update pode receber todos os atributos ou parte dos atributos.',
    }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_candidate_user_details_dto_1.UpdateCandidateUserDetailsDto]),
    __metadata("design:returntype", Promise)
], CandidateUserDetailsController.prototype, "update", null);
CandidateUserDetailsController = __decorate([
    (0, common_1.Controller)('candidate-users-details'),
    (0, swagger_1.ApiTags)('candidate_users-details'),
    __metadata("design:paramtypes", [candidate_user_details_service_1.CandidateUserDetailsService])
], CandidateUserDetailsController);
exports.CandidateUserDetailsController = CandidateUserDetailsController;
//# sourceMappingURL=candidate-user-details.controller.js.map