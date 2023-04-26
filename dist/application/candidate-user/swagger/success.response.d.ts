export declare class CreatesuccessResponse {
    id: number;
    name: string;
    email: string;
    roles: string;
}
export declare class ResponseFind {
    id: number;
    name: string;
    email: string;
    roles: string;
    provider: string;
    providerId: string;
    createdAt: Date;
    updatedAt: Date;
}
export declare class UpdateDTOSwagger {
    name: string;
}
export declare class UpdateResponse {
    message: string;
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
export declare const ApirParamFindById: {
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
