import { Injectable } from '@nestjs/common';

import { CreateCandidateProfileDto } from "src/application/candidate-profile/dto/create-candidate-profile.dto";
import { UpdateCandidateProfileDto } from "src/application/candidate-profile/dto/update-candidate-profile.dto";
import { CandidateProfile } from "src/application/candidate-profile/entities/candidate-profile.entity";
import { CandidateProfileRepository } from "src/application/candidate-profile/repository/candidate-profile.repository";
import { PrismaService } from 'src/config/database/prisma/prisma.service';

@Injectable()
export class CandidateProfileSQLiteRepository implements CandidateProfileRepository {
    constructor(
        private readonly prisma: PrismaService,
    ) { }

    async create(profile: CreateCandidateProfileDto): Promise<CandidateProfile> {
        return await this.prisma.candidateProfile.create({ data: profile });
    }
    async findAll(): Promise<any> {
        return await this.prisma.candidateProfile.findMany();
    }
    findById(id: number): Promise<CandidateProfile> {
        return this.prisma.candidateProfile.findUnique({ where: { id } });
    }
    update(id: number, profile: UpdateCandidateProfileDto) {
        throw new Error("Method not implemented.");
    }
    delete(id: number): void {
        throw new Error("Method not implemented.");
    }

}