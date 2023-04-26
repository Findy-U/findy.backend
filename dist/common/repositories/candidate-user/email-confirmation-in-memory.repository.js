"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailConfirmationInMemory = void 0;
const common_1 = require("@nestjs/common");
const crypto_1 = require("crypto");
let EmailConfirmationInMemory = class EmailConfirmationInMemory {
    constructor() {
        this.users = [
            {
                email: 'joao@gmail.com',
                password: 'senhaJoao123',
                token: (0, crypto_1.randomUUID)(),
            },
            {
                email: 'jorge@gmail.com',
                password: 'senhaJorge123',
                token: (0, crypto_1.randomUUID)(),
            },
            {
                email: 'ana@gmail.com',
                password: 'senhaAna123',
                token: (0, crypto_1.randomUUID)(),
            },
            {
                email: 'Felipe@gmail.com',
                password: 'senhaFelipe123',
                token: (0, crypto_1.randomUUID)(),
            },
        ];
    }
    async findRegister(token) {
        this.user = await this.users.find((user) => user.token === token);
        if (!this.user) {
            console.log('Usuário não encontrado');
        }
        console.log(this.users);
        return this.user;
    }
    async linkGenerate(email) {
        const userConfirmated = await this.users.find((user) => user.email === email);
        if (!userConfirmated) {
            throw new Error('Usuário não encontrado');
        }
        const link = `http://localhost:3001/api/candidate-user/confirm?token=${userConfirmated.token}`;
        return link;
    }
    async confirmRegistration(token) {
        const userConfirmated = await this.findRegister(token);
        if (!userConfirmated) {
            console.log('Token inválido');
        }
        console.log(userConfirmated);
        userConfirmated.active = true;
        return `Usuário confirmado: ${JSON.stringify(userConfirmated)}`;
    }
};
EmailConfirmationInMemory = __decorate([
    (0, common_1.Injectable)()
], EmailConfirmationInMemory);
exports.EmailConfirmationInMemory = EmailConfirmationInMemory;
//# sourceMappingURL=email-confirmation-in-memory.repository.js.map