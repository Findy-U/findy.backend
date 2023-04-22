import { CreateCandidateProfileDto } from 'src/application/candidate-profile/dto/create-candidate-profile.dto';
import { UpdateCandidateProfileDto } from 'src/application/candidate-profile/dto/update-candidate-profile.dto';
import { CandidateProfile } from 'src/application/candidate-profile/entities/candidate-profile.entity';
import { CandidateProfileRepository } from 'src/application/candidate-profile/repository/candidate-profile.repository';
import { PrismaService } from 'src/config/database/prisma/prisma.service';
export declare class CandidateProfileSQLiteRepository implements CandidateProfileRepository {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(profile: CreateCandidateProfileDto): Promise<import(".prisma/client").CandidateProfile>;
    findAll(): Promise<CandidateProfile[]>;
    findById(id: number): Promise<CandidateProfile>;
    update(id: number, profile: UpdateCandidateProfileDto): Promise<void>;
    remove(id: number): Promise<void>;
}
