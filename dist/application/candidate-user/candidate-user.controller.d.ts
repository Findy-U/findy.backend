import { CandidateUserService } from './candidate-user.service';
import { CreateCandidateUserDto } from './dto/create-candidate-user.dto';
import { UpdateCandidateUserDto } from './dto/update-cadidate-user.dto';
export declare class CandidateUserController {
    private readonly candidateUserService;
    constructor(candidateUserService: CandidateUserService);
    create(createCandidateUserDto: CreateCandidateUserDto): Promise<{
        id: any;
        name: any;
        email: any;
        roles: any;
    }>;
    findAll(): Promise<{
        id: any;
        name: any;
        email: any;
        roles: any;
        provider: any;
        providerId: any;
        createdAt: any;
        updatedAt: any;
        profile: {
            id: any;
            description: any;
            urlGithub: any;
            urlLinkedin: any;
            phone: any;
            availableTime: any;
            areaOfInterest: any;
        };
    }[]>;
    findOne(id: string): Promise<{
        id: any;
        name: any;
        email: any;
        roles: any;
        provider: any;
        providerId: any;
        createdAt: any;
        updatedAt: any;
        profile: {
            id: any;
            description: any;
            urlGithub: any;
            urlLinkedin: any;
            phone: any;
            availableTime: any;
            areaOfInterest: any;
        };
    }>;
    update(id: string, updateCandidateUserDto: UpdateCandidateUserDto): Promise<{
        message: string;
    }>;
}
