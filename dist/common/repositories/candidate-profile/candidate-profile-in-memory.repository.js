"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CandidateProfileInMemoryRepository = void 0;
const common_1 = require("@nestjs/common");
const candidate_profile_repository_1 = require("../../../application/candidate-profile/repository/candidate-profile.repository");
let CandidateProfileInMemoryRepository = class CandidateProfileInMemoryRepository extends candidate_profile_repository_1.CandidateProfileRepository {
    constructor() {
        super(...arguments);
        this.candidateProfile = [];
    }
    async create(profile) {
        await this.candidateProfile.push(profile);
        return this.candidateProfile[this.candidateProfile.length - 1];
    }
    async findAll() {
        return this.candidateProfile;
    }
    async findById(id) {
        return await this.candidateProfile.find((p) => p.idUserCandidate === id);
    }
    async update(id, profile) {
        'Esse método faz a atualização do perfil do usuário';
    }
    async remove(id) {
        const index = this.candidateProfile.findIndex((p, i) => {
            p.idCandidateUser === id;
        });
        this.candidateProfile.splice(index, 1);
    }
};
CandidateProfileInMemoryRepository = __decorate([
    (0, common_1.Injectable)()
], CandidateProfileInMemoryRepository);
exports.CandidateProfileInMemoryRepository = CandidateProfileInMemoryRepository;
//# sourceMappingURL=candidate-profile-in-memory.repository.js.map