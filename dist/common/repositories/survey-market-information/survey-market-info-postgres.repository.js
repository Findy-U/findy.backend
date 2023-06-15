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
exports.SurveyMarketInformationPostgresRepository = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../../config/database/prisma/prisma.service");
let SurveyMarketInformationPostgresRepository = class SurveyMarketInformationPostgresRepository {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(dataSurvey) {
        return this.prisma.surveyMarketInformation.create({ data: dataSurvey });
    }
    async findAll() {
        return await this.prisma.surveyMarketInformation.findMany();
    }
    async findOne(id) {
        return await this.prisma.surveyMarketInformation.findUnique({
            where: { id },
        });
    }
    async findByIdUser(idUser) {
        console.log('repository sqlite', idUser);
        return await this.prisma.surveyMarketInformation.findUnique({
            where: { candidateUserId: idUser },
        });
    }
    update(id, updateSurveyMarketInformationDto) {
        throw new Error('Method not implemented.');
    }
    remove(id) {
        throw new Error('Method not implemented.');
    }
};
SurveyMarketInformationPostgresRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], SurveyMarketInformationPostgresRepository);
exports.SurveyMarketInformationPostgresRepository = SurveyMarketInformationPostgresRepository;
//# sourceMappingURL=survey-market-info-postgres.repository.js.map