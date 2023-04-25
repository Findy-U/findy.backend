import { CandidateUserSerialize } from '../../common/serializers/candidate-user.serialize';
import { CreateCandidateUserDto } from './dto/create-candidate-user.dto';
import { UpdateCandidateUserDto } from './dto/update-cadidate-user.dto';
import { CandidateUserRepository } from './repositories/candidate-user.repository';
export declare class CandidateUserService {
    private readonly candidateRepository;
    private readonly candidateUserSerialize;
    constructor(candidateRepository: CandidateUserRepository, candidateUserSerialize: CandidateUserSerialize);
    create(createCandidate: CreateCandidateUserDto): Promise<{
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
    findOne(id: number): Promise<{
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
    findByEmail(email: string): Promise<import("./entities/candidate-user.entity").CandidateUser>;
    update(id: number, updateCandidateUserDto: UpdateCandidateUserDto): Promise<void>;
    findByIdAndToken(id: number, token: string): Promise<any>;
}
