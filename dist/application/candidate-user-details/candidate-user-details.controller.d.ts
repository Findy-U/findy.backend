import { Request } from 'express';
import { CandidateUserDetailsService } from './candidate-user-details.service';
import { CreateCandidateUserDetailsDto } from './dto/create-candidate-user-details.dto';
import { UpdateCandidateUserDetailsDto } from './dto/update-candidate-user-details.dto';
export declare class CandidateUserDetailsController {
    private readonly candidateUserDetailsService;
    constructor(candidateUserDetailsService: CandidateUserDetailsService);
    create(createCandidateUserDetailsDto: CreateCandidateUserDetailsDto, req: Request): Promise<{
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
    findOne(id: string): Promise<{
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
    update(id: string, updateCandidateUserDetailsDto: UpdateCandidateUserDetailsDto): Promise<{
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
