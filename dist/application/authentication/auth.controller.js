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
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const swagger_1 = require("@nestjs/swagger");
const constants_1 = require("../../common/constants/constants");
const google_oauth_guard_1 = require("../../common/guards/google-oauth.guard");
const local_auth_guard_1 = require("../../common/guards/local-auth.guard");
const recover_password_dto_1 = require("../candidate-user/dto/recover-password.dto");
const auth_service_1 = require("./auth.service");
const auth_success_response_1 = require("./swagger/auth-success.response");
let AuthController = class AuthController {
    constructor(authService, configService) {
        this.authService = authService;
        this.configService = configService;
    }
    async login(req) {
        return await this.authService.login(req.user);
    }
    async signInWithGoogle() {
        return;
    }
    async googleAuthRedirect(req, res) {
        const token = await this.authService.login(req.user);
        res.cookie(constants_1.SESSION_COOKIE_KEY, token.access_token, {
            httpOnly: true,
            sameSite: 'lax',
        });
        return res.redirect(this.configService.get('urlRedirectAuthGoogle'));
    }
    async sendRecoverPasswordEmail(email) {
        try {
            await this.authService.sendRecoverPasswordEmail(email);
            return {
                message: 'An email has been sent with instructions for resetting your password.',
            };
        }
        catch (error) {
            throw new common_1.NotFoundException(error.message);
        }
    }
    async resetPassword(id, recoverPaswor) {
        try {
            await this.authService.resetPassword(+id, recoverPaswor);
            return {
                message: 'Successfully reset password',
            };
        }
        catch (error) {
            throw new common_1.NotFoundException(error.message);
        }
    }
};
__decorate([
    (0, common_1.UseGuards)(local_auth_guard_1.LocalAuthGuard),
    (0, common_1.Post)('login'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOkResponse)({ type: auth_success_response_1.SuccessResponse }),
    (0, swagger_1.ApiBody)({ type: auth_success_response_1.RequestBodyLogin }),
    (0, swagger_1.ApiUnauthorizedResponse)({
        description: 'Email address or password provided is incorrect.',
        type: auth_success_response_1.LoginUnauthorizedExceptionError,
    }),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "login", null);
__decorate([
    (0, swagger_1.ApiExcludeEndpoint)(),
    (0, common_1.Get)('auth/google'),
    (0, common_1.UseGuards)(google_oauth_guard_1.GoogleOAuthGuard),
    (0, swagger_1.ApiOkResponse)({
        description: 'Endpoint responsável por realizar login com a conta do Google. O retorno é um token via cookies.',
        type: auth_success_response_1.SuccessResponse,
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "signInWithGoogle", null);
__decorate([
    (0, swagger_1.ApiExcludeEndpoint)(),
    (0, common_1.Get)('auth/google/redirect'),
    (0, common_1.UseGuards)(google_oauth_guard_1.GoogleOAuthGuard),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "googleAuthRedirect", null);
__decorate([
    (0, swagger_1.ApiBody)({
        description: 'Endpoint responsável por enviar e-mail de reset de senha e salvar no BD um token.',
        type: auth_success_response_1.SendRecoverPasswordEmailBodyProperty,
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        type: auth_success_response_1.ReponseRecoverPasswordEmail,
    }),
    (0, swagger_1.ApiNotFoundResponse)({
        description: 'Erro quando não encontra o e-mail correspondente no BD',
        type: auth_success_response_1.RecoverNotFoundExeptionError,
    }),
    (0, common_1.Post)('send-recover-password'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Body)('email')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "sendRecoverPasswordEmail", null);
__decorate([
    (0, common_1.Patch)('reset-password/:id'),
    (0, swagger_1.ApiParam)({
        name: 'id',
        required: true,
        description: 'Um número inteiro para o id do usuário candidato',
        schema: { oneOf: [{ type: 'integer' }] },
    }),
    (0, swagger_1.ApiBody)({
        type: recover_password_dto_1.RecoverPasswordDto,
    }),
    (0, swagger_1.ApiOkResponse)({
        type: auth_success_response_1.ReponseRestPasswordEmail,
    }),
    (0, swagger_1.ApiNotFoundResponse)({
        description: 'Erro quando não encontra o id do usuário o token no BD',
        type: auth_success_response_1.ResetFoundExeptionError,
    }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, recover_password_dto_1.RecoverPasswordDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "resetPassword", null);
AuthController = __decorate([
    (0, common_1.Controller)(),
    (0, swagger_1.ApiTags)('authentication'),
    __metadata("design:paramtypes", [auth_service_1.AuthService,
        config_1.ConfigService])
], AuthController);
exports.AuthController = AuthController;
//# sourceMappingURL=auth.controller.js.map