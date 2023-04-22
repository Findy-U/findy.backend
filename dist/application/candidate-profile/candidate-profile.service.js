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
exports.CandidateProfileService = void 0;
const common_1 = require("@nestjs/common");
const not_found_error_1 = require("../../common/exceptions/not-found.error");
const candidate_profile_repository_1 = require("./repository/candidate-profile.repository");
let CandidateProfileService = class CandidateProfileService {
    constructor(candidateUserRepository) {
        this.candidateUserRepository = candidateUserRepository;
    }
    async create(createCandidateProfileDto) {
        return await this.candidateUserRepository.create(createCandidateProfileDto);
    }
    async findAll() {
        return await this.candidateUserRepository.findAll();
    }
    async findOne(id) {
        this.candidate = await this.candidateUserRepository.findById(id);
        if (!this.candidate) {
            throw new not_found_error_1.NotFoundError('Profile not found');
        }
        return this.candidate;
    }
    async update(id, updateCandidateProfileDto) {
        return `This action updates a #${id} candidateProfile`;
    }
    async remove(id) {
        await this.candidateUserRepository.remove(id);
    }
};
CandidateProfileService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [candidate_profile_repository_1.CandidateProfileRepository])
], CandidateProfileService);
exports.CandidateProfileService = CandidateProfileService;
//# sourceMappingURL=candidate-profile.service.js.map