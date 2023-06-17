import { SurveyFeelingsInterface } from '../interfaces/survey-feelings/survey-feelings.interface';
export declare class SurveyFeelingsSerialize {
    requestToDb(details: SurveyFeelingsInterface): {
        detailsId: number;
        candidateUserId: number;
        professionalAchievement: number;
        motivation: string;
        createdAt: string;
    };
    dbToResponseAll(details: any): {
        detailsId: any;
        candidateUserId: any;
        professionalAchievement: any;
        motivation: any;
        createdAt: any;
    };
    dbToResponseOne(details: any): {
        detailsId: any;
        candidateUserId: any;
        professionalAchievement: any;
        motivation: any;
        createdAt: string;
        user: {
            name: any;
            email: any;
            roles: any;
        };
    };
    dbToResponseCreate(details: any): {
        detailsId: any;
        candidateUserId: any;
        professionalAchievement: any;
        motivation: any;
    };
}
