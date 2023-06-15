import { CreateCandidateUserDetailsDto } from './dto/create-candidate-user-details.dto';
import { UpdateCandidateUserDetailsDto } from './dto/update-candidate-user-details.dto';
import { CandidateUserDetailsRepository } from './repositories/candidate-user-details.repository';
import { CandidateUserDetailsSerialize } from '../../common/serializers/candidate-user-details.serialize';
export declare class CandidateUserDetailsService {
    private readonly candidateRepository;
    private readonly candidateUserDetailsSerialize;
    constructor(candidateRepository: CandidateUserDetailsRepository, candidateUserDetailsSerialize: CandidateUserDetailsSerialize);
    create(details: CreateCandidateUserDetailsDto): Promise<{
        detailsId: any;
        candidateUserId: any;
        gender: any;
        birthDate: any;
        residencePlace: any;
    }>;
    findAll(): Promise<{
        detailsId: any;
        candidateUserId: any;
        gender: any;
        birthDate: any;
        residencePlace: any;
        createdAt: string;
        updatedAt: string;
    }[]>;
    findOne(id: number): Promise<{
        detailsId: any;
        candidateUserId: any;
        gender: any;
        birthDate: any;
        residencePlace: any;
        createdAt: string;
        updatedAt: string;
        user: {
            name: any;
            email: any;
            roles: any;
        };
    }>;
    update(id: number, updateCandidateUserDetailsDto: UpdateCandidateUserDetailsDto): Promise<{
        message: string;
        details: {
            detailsId: any;
            candidateUserId: any;
            gender: any;
            birthDate: any;
            residencePlace: any;
            createdAt: string;
            updatedAt: string;
        };
    }>;
}
