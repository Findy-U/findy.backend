export declare class CreatesuccessResponse {
    id: number;
    candidateUserId: number;
    professionalAchievement: number;
    motivation: string;
}
export declare class ResponseFind {
    id: number;
    candidateUserId: number;
    professionalAchievement: number;
    motivation: string;
    createdAt: string;
}
export declare class ConflictExceptionError {
    statusCode: number;
    message: string;
    error: string;
}
export declare class NotFoundExceptionError {
    statusCode: number;
    message: string;
    error: string;
}
export declare class UnauthorizedExceptionError {
    statusCode: number;
    message: string;
    error: string;
}
export declare const ApiCreatedResponseCreate: {
    description: string;
    type: typeof CreatesuccessResponse;
};
export declare const ApiConflictResponseCreate: {
    description: string;
    type: typeof ConflictExceptionError;
};
export declare const ApiResponseFindAll: {
    status: number;
    description: string;
};
export declare const ApiResponseFindById: {
    status: number;
    description: string;
};
export declare const ApiParamFindById: {
    name: string;
    required: boolean;
    description: string;
    schema: {
        oneOf: {
            type: string;
        }[];
    };
};
