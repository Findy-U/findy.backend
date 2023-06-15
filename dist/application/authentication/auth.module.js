"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const jwt_1 = require("@nestjs/jwt");
const passport_1 = require("@nestjs/passport");
const login_validation_middleware_1 = require("../../common/middlewares/login-validation.middleware");
const mail_service_1 = require("../../mails/mail.service");
const candidate_user_module_1 = require("../candidate-user/candidate-user.module");
const candidate_user_service_1 = require("../candidate-user/candidate-user.service");
const candidate_user_repository_1 = require("../candidate-user/repositories/candidate-user.repository");
const auth_controller_1 = require("./auth.controller");
const auth_service_1 = require("./auth.service");
const google_strategy_1 = require("./strategies/google.strategy");
const jwt_strategy_1 = require("./strategies/jwt.strategy");
const local_strategy_ts_1 = require("./strategies/local.strategy.ts");
const candidate_user_sqlite_repository_1 = require("../../common/repositories/candidate-user/candidate-user-sqlite.repository");
const candidate_user_serialize_1 = require("../../common/serializers/candidate-user.serialize");
let AuthModule = class AuthModule {
    configure(consumer) {
        consumer.apply(login_validation_middleware_1.LoginValidationMiddleware).forRoutes('api/login');
    }
};
AuthModule = __decorate([
    (0, common_1.Module)({
        imports: [
            passport_1.PassportModule,
            jwt_1.JwtModule.registerAsync({
                useFactory: async (configService) => ({
                    secret: configService.get('auth.jwt.secret'),
                    signOptions: {
                        expiresIn: configService.get('auth.jwt.expiresInSeconds'),
                    },
                }),
                inject: [config_1.ConfigService],
            }),
            candidate_user_module_1.CandidateUserModule,
        ],
        controllers: [auth_controller_1.AuthController],
        providers: [
            auth_service_1.AuthService,
            candidate_user_service_1.CandidateUserService,
            candidate_user_serialize_1.CandidateUserSerialize,
            local_strategy_ts_1.LocalStrategy,
            jwt_strategy_1.JwtStrategy,
            google_strategy_1.GoogleStrategy,
            mail_service_1.MailService,
            {
                provide: candidate_user_repository_1.CandidateUserRepository,
                useClass: candidate_user_sqlite_repository_1.CandidateUserSqliteRepository,
            },
        ],
    })
], AuthModule);
exports.AuthModule = AuthModule;
//# sourceMappingURL=auth.module.js.map