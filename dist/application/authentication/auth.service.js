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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const bcrypt = require("bcrypt");
const crypto_1 = require("crypto");
const constants_1 = require("../../common/constants/constants");
const not_found_error_1 = require("../../common/exceptions/not-found.error");
const unauthorized_error_1 = require("../../common/exceptions/unauthorized.error");
const candidate_user_serialize_1 = require("../../common/serializers/candidate-user.serialize");
const mail_service_1 = require("../../mails/mail.service");
const auth_provider_enum_1 = require("../../models/auth-provider.enum");
const roles_enum_1 = require("../../models/roles.enum");
const candidate_user_service_1 = require("../candidate-user/candidate-user.service");
let AuthService = class AuthService {
    constructor(candidateUserService, candidateUserSerialize, jwtService, mailService) {
        this.candidateUserService = candidateUserService;
        this.candidateUserSerialize = candidateUserSerialize;
        this.jwtService = jwtService;
        this.mailService = mailService;
    }
    async login(user) {
        const payload = {
            sub: user.id,
            name: user.name,
            email: user.email,
            roles: user.roles,
        };
        return {
            access_token: this.jwtService.sign(payload),
        };
    }
    async validateLocalAuth(email, password) {
        const candidate = await this.candidateUserService.findByEmail(email);
        if (candidate) {
            const isPasswordValid = await bcrypt.compare(password, candidate.password);
            if (isPasswordValid) {
                return candidate;
            }
        }
        throw new unauthorized_error_1.UnauthorizedError('Email address or password provided is incorrect.');
    }
    async validateGoogleAuth(googleUser) {
        const candidate = await this.candidateUserService.findByEmail(googleUser.email);
        if (!candidate) {
            const newCandidate = await this.candidateUserService.create({
                name: googleUser.displayName,
                email: googleUser.email,
                roles: roles_enum_1.Role.Candidate,
                provider: auth_provider_enum_1.AuthProviderType.google,
                providerId: googleUser.id,
            });
            return newCandidate;
        }
        if (candidate) {
            return candidate;
        }
        return null;
    }
    async sendRecoverPasswordEmail(email) {
        const candidate = await this.candidateUserService.findByEmail(email);
        if (!candidate) {
            throw new not_found_error_1.NotFoundError('There is no user registered with this email');
        }
        const token = (0, crypto_1.randomBytes)(32).toString('hex');
        await this.candidateUserService.update(candidate.id, {
            recoverToken: token,
        });
        await this.mailService.sendPasswordRecover(candidate, token);
    }
    async resetPassword(id, recoverPassword) {
        await this.candidateUserService.findByIdAndToken(id, recoverPassword.recoverToken);
        const pwdHashed = await bcrypt.hash(recoverPassword.password, constants_1.SALT_BCRYPT);
        await this.candidateUserService.update(id, {
            password: pwdHashed,
            recoverToken: null,
            updatedAt: new Date(),
        });
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [candidate_user_service_1.CandidateUserService,
        candidate_user_serialize_1.CandidateUserSerialize,
        jwt_1.JwtService,
        mail_service_1.MailService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map