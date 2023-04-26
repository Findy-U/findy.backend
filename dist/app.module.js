"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const auth_module_1 = require("./application/authentication/auth.module");
const candidate_user_module_1 = require("./application/candidate-user/candidate-user.module");
const app_config_1 = require("./config/app/app.config");
const prisma_module_1 = require("./config/database/prisma/prisma.module");
const mail_module_1 = require("./mails/mail.module");
const candidate_profile_module_1 = require("./application/candidate-profile/candidate-profile.module");
const candidate_project_module_1 = require("./application/candidate-project/candidate-project.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({ isGlobal: true, load: [app_config_1.default] }),
            auth_module_1.AuthModule,
            candidate_user_module_1.CandidateUserModule,
            mail_module_1.MailModule,
            prisma_module_1.PrismaModule,
            candidate_user_module_1.CandidateUserModule,
            candidate_profile_module_1.CandidateProfileModule,
            candidate_project_module_1.CandidateProjectModule,
        ],
        controllers: [],
        providers: [],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map