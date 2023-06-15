"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CandidateUserInMemoryRepository = void 0;
const common_1 = require("@nestjs/common");
const roles_enum_1 = require("../../interfaces/authentication/roles.enum");
let CandidateUserInMemoryRepository = class CandidateUserInMemoryRepository {
    constructor() {
        this.candidate = [
            {
                id: 1,
                name: 'John Doe',
                email: 'john-doe@test.com',
                password: '$2b$10$raAwBs3zgyoQNOkEy9fWvuuTNW/7XqQAw2OZZPzQFTHPaAbiU52WG',
                roles: 'project',
                provider: null,
                providerId: null,
                recoverToken: null,
                activated: false,
            },
            {
                id: 2,
                name: 'Emerson Moreira',
                email: 'eemr033@gmail.com',
                password: null,
                roles: 'candidate',
                provider: 'google',
                providerId: '109937089733594757055',
                recoverToken: null,
                activated: false,
            },
            {
                id: 3,
                name: 'Emerson Moreira',
                email: 'eemr3@yahoo.com.br',
                password: null,
                roles: 'candidate',
                provider: 'findy',
                providerId: null,
                recoverToken: null,
                activated: false,
            },
        ];
    }
    async create(user) {
        if (!user.name || !user.email || !user.password) {
            throw new Error('Invalid data');
        }
        this.candidate.push({
            id: this.candidate.length + 1,
            name: user.name,
            email: user.email,
            password: user.password,
            roles: roles_enum_1.Role.Candidate,
            provider: user.provider,
            providerId: user.providerId,
            activated: user.activated,
        });
        return this.findByEmail(user.email);
    }
    async findByEmail(email) {
        return new Promise((resolve) => resolve(this.candidate.find((user) => user.email === email)));
    }
    async findById(id) {
        return new Promise((resolve) => resolve(this.candidate.find((user) => user.id === id)));
    }
    async findAll() {
        return new Promise((resolve) => resolve(this.candidate));
    }
    update(id, cadidate) {
        throw new Error('Method not implemented.');
    }
    remove(id) {
        throw new Error('Method not implemented.');
    }
};
CandidateUserInMemoryRepository = __decorate([
    (0, common_1.Injectable)()
], CandidateUserInMemoryRepository);
exports.CandidateUserInMemoryRepository = CandidateUserInMemoryRepository;
//# sourceMappingURL=candidate-user-in-memory.repository.js.map