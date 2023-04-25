import { CandidateProject, Roles, Stack } from '@prisma/client';
import { CreateCandidateProjectDto } from '../../../application/candidate-project/dto/create-candidate-project.dto';
import { UpdateCandidateProjectDto } from '../../../application/candidate-project/dto/update-candidate-project.dto';
import { CandidateProjectRepository } from '../../../application/candidate-project/repositories/candidate-project.repository';
import { PrismaService } from '../../../config/database/prisma/prisma.service';
import { CandidateProjectResponse, CandidateUser } from '../../../models/candidate-project';
export declare class CandidateProjectSqliteRepository implements CandidateProjectRepository {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(project: CreateCandidateProjectDto, user: CandidateUser): Promise<CandidateProject>;
    findAll(): Promise<CandidateProjectResponse[]>;
    findById(id: number): Promise<CandidateProjectResponse>;
    findByName(name: string): Promise<CandidateProject>;
    findAllRolesProject(): Promise<Roles[]>;
    findByIdRoleProject(id: number): Promise<Roles>;
    findAllSkillsProject(): Promise<Stack[]>;
    findByIdSkillProject(id: number): Promise<Stack>;
    update(id: number, project: UpdateCandidateProjectDto): Promise<void>;
    remove(id: number): Promise<{
        message: string;
    }>;
}
