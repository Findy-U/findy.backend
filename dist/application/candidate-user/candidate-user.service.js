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
exports.CandidateUserService = void 0;
const common_1 = require("@nestjs/common");
const not_found_error_1 = require("../../common/exceptions/not-found.error");
const candidate_user_serialize_1 = require("../../common/serializers/candidate-user.serialize");
const candidate_user_repository_1 = require("./repositories/candidate-user.repository");
const mail_service_1 = require("../../mails/mail.service");
const generate_token_1 = require("../../common/helpers/generate-token");
const bad_request_error_1 = require("../../common/exceptions/bad-request.error");
let CandidateUserService = class CandidateUserService {
    constructor(candidateRepository, candidateUserSerialize, mailService) {
        this.candidateRepository = candidateRepository;
        this.candidateUserSerialize = candidateUserSerialize;
        this.mailService = mailService;
    }
    async create(createCandidate) {
        const candidateExists = await this.findByEmail(createCandidate.email);
        const token = generate_token_1.generateTemporaryToken.token;
        const expiredAt = generate_token_1.generateTemporaryToken.expiredAtConfirmationToken();
        if (candidateExists && !createCandidate.provider) {
            throw new Error('Candidate user already exists');
        }
        const newCandidate = await this.candidateRepository.create(createCandidate, token, expiredAt);
        await this.mailService.sendActivationEmail(newCandidate, token);
        return this.candidateUserSerialize.dbToResponseCreate(newCandidate);
    }
    async findAll() {
        const candidates = await this.candidateRepository.findAll();
        return candidates.map((candidate) => this.candidateUserSerialize.dbToResponse(candidate));
    }
    async findOne(id) {
        const candidate = await this.candidateRepository.findById(id);
        if (!candidate) {
            throw new not_found_error_1.NotFoundError('Candidate not found');
        }
        return this.candidateUserSerialize.dbToResponse(candidate);
    }
    async findByEmail(email) {
        return await this.candidateRepository.findByEmail(email);
    }
    async update(id, updateCandidateUserDto) {
        await this.findOne(id);
        await this.candidateRepository.update(id, updateCandidateUserDto);
    }
    async findByIdAndToken(id, token) {
        const candidate = await this.candidateRepository.findById(id);
        if (!candidate) {
            throw new Error('Candidate not found');
        }
        if (token !== candidate.recoverToken ||
            candidate.recoverTokenExpiresAt < new Date()) {
            await this.candidateRepository.update(id, {
                recoverToken: null,
                recoverTokenExpiresAt: null,
            });
            throw new Error('Recovery token not found or recovery token is expired');
        }
        return candidate;
    }
    async confirmationEmail(id, token) {
        const candidate = await this.candidateRepository.findById(id);
        const now = new Date();
        if (candidate.confirmationToken !== token ||
            candidate.expiredConfirmationToken < now) {
            throw new bad_request_error_1.BadRequestError('Invalid token! Please request a new token');
        }
        await this.candidateRepository.update(candidate.id, {
            activated: true,
            confirmationToken: null,
            expiredConfirmationToken: null,
        });
        return candidate;
    }
};
CandidateUserService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [candidate_user_repository_1.CandidateUserRepository,
        candidate_user_serialize_1.CandidateUserSerialize,
        mail_service_1.MailService])
], CandidateUserService);
exports.CandidateUserService = CandidateUserService;
//# sourceMappingURL=candidate-user.service.js.map