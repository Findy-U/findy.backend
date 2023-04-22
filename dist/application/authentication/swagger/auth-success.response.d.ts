export declare class RequestBodyLogin {
    email: string;
    password: string;
}
export declare class SuccessResponse {
    access_token: string;
}
export declare class SuccessGoogleResponse {
    message: string;
}
export declare class SendRecoverPasswordEmailBodyProperty {
    email: string;
}
export declare class ReponseRecoverPasswordEmail {
    message: string;
}
export declare class ReponseRestPasswordEmail {
    message: string;
}
export declare class LoginUnauthorizedExceptionError {
    statusCode: number;
    message: string;
    error: string;
}
export declare class RecoverNotFoundExeptionError {
    statusCode: number;
    message: string;
    error: string;
}
export declare class ResetFoundExeptionError {
    statusCode: number;
    message: string;
    error: string;
}
