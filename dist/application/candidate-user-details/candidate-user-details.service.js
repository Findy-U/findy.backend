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
exports.CandidateUserDetailsService = void 0;
const common_1 = require("@nestjs/common");
const candidate_user_details_repository_1 = require("./repositories/candidate-user-details.repository");
const not_found_error_1 = require("../../common/exceptions/not-found.error");
const candidate_user_details_serialize_1 = require("../../common/serializers/candidate-user-details.serialize");
let CandidateUserDetailsService = class CandidateUserDetailsService {
    constructor(candidateRepository, candidateUserDetailsSerialize) {
        this.candidateRepository = candidateRepository;
        this.candidateUserDetailsSerialize = candidateUserDetailsSerialize;
    }
    async create(details) {
        const candidateUserId = await this.candidateRepository.findUnique(details.candidateUserId);
        if (candidateUserId) {
            throw new Error('this user already has registered details');
        }
        const userDetails = await this.candidateRepository.create(details);
        return this.candidateUserDetailsSerialize.dbToResponseCreate(userDetails);
    }
    async findAll() {
        const details = await this.candidateRepository.findAll();
        return details.map((details) => this.candidateUserDetailsSerialize.dbToResponseAll(details));
    }
    async findOne(id) {
        const candidateDetails = await this.candidateRepository.findById(id);
        if (!candidateDetails) {
            throw new not_found_error_1.NotFoundError('Candidate not found');
        }
        return this.candidateUserDetailsSerialize.dbToResponseOne(candidateDetails);
    }
    async update(id, updateCandidateUserDetailsDto) {
        await this.findOne(id);
        const candidateDetails = await this.candidateRepository.update(id, updateCandidateUserDetailsDto);
        return this.candidateUserDetailsSerialize.dbToResponseUpdate(candidateDetails);
    }
};
CandidateUserDetailsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [candidate_user_details_repository_1.CandidateUserDetailsRepository,
        candidate_user_details_serialize_1.CandidateUserDetailsSerialize])
], CandidateUserDetailsService);
exports.CandidateUserDetailsService = CandidateUserDetailsService;
//# sourceMappingURL=candidate-user-details.service.js.map