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
let MailService = class MailService {
    constructor(configService, mailerService) {
        this.configService = configService;
        this.mailerService = mailerService;
    }
    async sendActivationEmail(candidate, token) {
        const url = `${this.configService.get('urlEmailConfirmation')}?id=${candidate.id}
    &token=${token}`;
        await this.mailerService.sendMail({
            to: candidate.email,
            from: '"Support Findy Team" noreply@application.com',
            subject: 'Email de ativação',
            template: './activationEmail',
            context: {
                name: candidate.name,
                url,
            },
        });
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
                email: candidate.email,
                url,
            },
        });
    }
};
MailService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService,
        mailer_1.MailerService])
], MailService);
exports.MailService = MailService;
//# sourceMappingURL=mail.service.js.map