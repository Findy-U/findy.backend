export declare class CreatesuccessResponse {
    detailsId: number;
    candidateUserId: number;
    gender: string;
    birthDate: string;
    residencePlace: string;
}
export declare class ResponseFind {
    detailsId: number;
    candidateUserId: number;
    gender: string;
    birthDate: string;
    residencePlace: string;
    createdAt: string;
    updatedAt: string | null;
}
export declare class UpdateDTOSwagger {
    gender: string;
}
export declare class UpdateResponse {
    message: string;
    detailsId: number;
    candidateUserId: number;
    gender: string;
    birthDate: string;
    residencePlace: string;
    createdAt: string;
    updatedAt: string | null;
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
export declare const ApiResponseUpdate: {
    status: number;
    description: string;
};
