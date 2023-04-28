import { Request } from 'express';
import { CandidateProjectService } from './candidate-project.service';
import { CreateCandidateProjectDto } from './dto/create-candidate-project.dto';
import { UpdateCandidateProjectDto } from './dto/update-candidate-project.dto';
export declare class CandidateProjectController {
    private readonly candidateProjectService;
    constructor(candidateProjectService: CandidateProjectService);
    create(req: Request, createProjectDto: CreateCandidateProjectDto): Promise<import(".prisma/client").CandidateProject>;
    findAll(): Promise<import("../../models/candidate-project").CandidateProjectResponse[]>;
    findAllRolesProject(): Promise<import(".prisma/client").Roles[]>;
    findAllSkillsProject(): Promise<import(".prisma/client").Stack[]>;
    findOne(id: string): Promise<import(".prisma/client").CandidateProject>;
    findRolesProject(id: string): Promise<import(".prisma/client").Roles>;
    findByIdSkillProject(id: string): Promise<import(".prisma/client").Stack>;
    update(id: string, updateCandidateProjectDto: UpdateCandidateProjectDto): Promise<{
        message: string;
    }>;
    remove(id: string): Promise<{
        message: string;
    }>;
}
