import { CandidateUserInterface } from '../interfaces/candidate-user.interface';
export declare class CandidateUserSerialize {
    requestToDb(candidate: CandidateUserInterface): {
        name: string;
        email: string;
        password: string;
        roles: string;
        provider: string;
        providerId: string;
    };
    dbToResponseCreate(candidate: any): {
        id: any;
        name: any;
        email: any;
        roles: any;
    };
    dbToResponse(candidate: any): {
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
    };
}
