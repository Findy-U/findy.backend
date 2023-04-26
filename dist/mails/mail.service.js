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
exports.MailService = void 0;
const mailer_1 = require("@nestjs-modules/mailer");
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const email_confirmation_in_memory_repository_1 = require("../common/repositories/candidate-user/email-confirmation-in-memory.repository");
let MailService = class MailService {
    constructor(mailerService, configService, emailConfirmationRepository) {
        this.mailerService = mailerService;
        this.configService = configService;
        this.emailConfirmationRepository = emailConfirmationRepository;
    }
    confirmRegistration(token) {
        return this.emailConfirmationRepository.confirmRegistration(token);
    }
    async sendPasswordRecover(candidate, token) {
        const url = `${this.configService.get('urlRecoverPassword')}?id=${candidate.id}&token=${token}`;
        await this.mailerService.sendMail({
            to: candidate.email,
            from: '"Support Findy Team" noreply@application.com',
            subject: 'Recuperação de senha',
            template: './recoverPassword',
            context: {
                name: candidate.name,
                url,
            },
        });
    }
};
MailService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [mailer_1.MailerService,
        config_1.ConfigService,
        email_confirmation_in_memory_repository_1.EmailConfirmationInMemory])
], MailService);
exports.MailService = MailService;
//# sourceMappingURL=mail.service.js.map