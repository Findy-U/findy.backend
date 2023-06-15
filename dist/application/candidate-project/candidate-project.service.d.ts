import { CreateCandidateProjectDto } from './dto/create-candidate-project.dto';
import { UpdateCandidateProjectDto } from './dto/update-candidate-project.dto';
import { CandidateProjectRepository } from './repositories/candidate-project.repository';
import { CandidateUser } from '../../common/interfaces/candidate-projects/candidate-project';
export declare class CandidateProjectService {
    private readonly candidateProjectRepository;
    constructor(candidateProjectRepository: CandidateProjectRepository);
    create(createProject: CreateCandidateProjectDto, user: CandidateUser): Promise<import(".prisma/client").CandidateProject>;
    findAll(): Promise<import("../../common/interfaces/candidate-projects/candidate-project").CandidateProjectResponse[]>;
    findOne(id: number): Promise<import(".prisma/client").CandidateProject>;
    findAllRolesProject(): Promise<import(".prisma/client").Roles[]>;
    findByIdRoleProject(id: number): Promise<import(".prisma/client").Roles>;
    findAllSkillsProject(): Promise<import(".prisma/client").Stack[]>;
    findByIdSkillProject(id: number): Promise<import(".prisma/client").Stack>;
    updateProjectData(id: number, updateProjectDto: UpdateCandidateProjectDto): Promise<void>;
    remove(id: number): Promise<{
        message: string;
    }>;
}
