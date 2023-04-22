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
exports.CandidateUserController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const jwt_auth_guard_1 = require("../../common/guards/jwt-auth.guard");
const candidate_user_service_1 = require("./candidate-user.service");
const create_cadidate_user_dto_1 = require("./dto/create-cadidate-user.dto");
const update_cadidate_user_dto_1 = require("./dto/update-cadidate-user.dto");
const success_response_1 = require("./swagger/success.response");
let CandidateUserController = class CandidateUserController {
    constructor(candidateUserService) {
        this.candidateUserService = candidateUserService;
    }
    async create(createCandidateUserDto) {
        try {
            return await this.candidateUserService.create(createCandidateUserDto);
        }
        catch (error) {
            throw new common_1.ConflictException(error.message);
        }
    }
    async findAll() {
        return await this.candidateUserService.findAll();
    }
    async findOne(id) {
        try {
            return await this.candidateUserService.findOne(+id);
        }
        catch (error) {
            throw new common_1.NotFoundException(error.message);
        }
    }
    async update(id, updateCandidateUserDto) {
        await this.candidateUserService.update(+id, updateCandidateUserDto);
        return { message: 'Uupdate successfully' };
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiCreatedResponse)(success_response_1.ApiCreatedResponseCreate),
    (0, swagger_1.ApiConflictResponse)(success_response_1.ApiConflictResponseCreate),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_cadidate_user_dto_1.CreateCandidateUserDto]),
    __metadata("design:returntype", Promise)
], CandidateUserController.prototype, "create", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)(),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiResponse)(Object.assign(Object.assign({}, success_response_1.ApiResponseFindAll), { type: [success_response_1.ResponseFind] })),
    (0, swagger_1.ApiUnauthorizedResponse)({
        description: 'Unauthorized user',
        type: success_response_1.UnauthorizedExceptionError,
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CandidateUserController.prototype, "findAll", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiResponse)(Object.assign(Object.assign({}, success_response_1.ApiResponseFindById), { type: success_response_1.ResponseFind })),
    (0, swagger_1.ApiNotFoundResponse)({
        description: 'Erro quando não encontra o usuário no BD',
        type: success_response_1.NotFoundExceptionError,
    }),
    (0, swagger_1.ApiUnauthorizedResponse)({
        description: 'Unauthorized user',
        type: success_response_1.UnauthorizedExceptionError,
    }),
    (0, swagger_1.ApiParam)(success_response_1.ApirParamFindById),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CandidateUserController.prototype, "findOne", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiResponse)(Object.assign(Object.assign({}, success_response_1.ApiResponseUpdate), { type: success_response_1.UpdateResponse })),
    (0, swagger_1.ApiNotFoundResponse)({
        description: 'Erro quando não encontra o usuário no BD',
        type: success_response_1.NotFoundExceptionError,
    }),
    (0, swagger_1.ApiUnauthorizedResponse)({
        description: 'Unauthorized user',
        type: success_response_1.UnauthorizedExceptionError,
    }),
    (0, swagger_1.ApiParam)(success_response_1.ApirParamFindById),
    (0, swagger_1.ApiBody)({
        type: success_response_1.UpdateDTOSwagger,
        description: 'O body do update pode receber todos os atributos ou parte dos atributos.',
    }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_cadidate_user_dto_1.UpdateCandidateUserDto]),
    __metadata("design:returntype", Promise)
], CandidateUserController.prototype, "update", null);
CandidateUserController = __decorate([
    (0, common_1.Controller)('candidate-users'),
    (0, swagger_1.ApiTags)('candidate_users'),
    __metadata("design:paramtypes", [candidate_user_service_1.CandidateUserService])
], CandidateUserController);
exports.CandidateUserController = CandidateUserController;
//# sourceMappingURL=candidate-user.controller.js.map