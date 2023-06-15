import { CandidateUserDetailsInterface } from '../interfaces/candidate-user-details/candidate-user-details.interface';
export declare class CandidateUserDetailsSerialize {
    requestToDb(details: CandidateUserDetailsInterface): {
        detailsId: number;
        candidateUserId: number;
        gender: string;
        birthDate: string;
        residencePlace: string;
        createdAt: string;
        updatedAt: string;
    };
    dbToResponseCreate(details: any): {
        detailsId: any;
        candidateUserId: any;
        gender: any;
        birthDate: any;
        residencePlace: any;
    };
    dbToResponseAll(details: any): {
        detailsId: any;
        candidateUserId: any;
        gender: any;
        birthDate: any;
        residencePlace: any;
        createdAt: string;
        updatedAt: string;
    };
    dbToResponseOne(details: any): {
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
    };
    dbToResponseUpdate(details: any): {
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
    };
}
