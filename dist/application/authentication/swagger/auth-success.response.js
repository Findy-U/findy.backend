"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResetFoundExeptionError = exports.RecoverNotFoundExeptionError = exports.LoginUnauthorizedExceptionError = exports.ReponseRestPasswordEmail = exports.ReponseRecoverPasswordEmail = exports.SendRecoverPasswordEmailBodyProperty = exports.SuccessGoogleResponse = exports.SuccessResponse = exports.RequestBodyLogin = void 0;
const swagger_1 = require("@nestjs/swagger");
class RequestBodyLogin {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'johndoe@email.com' }),
    __metadata("design:type", String)
], RequestBodyLogin.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'B12#&d@m' }),
    __metadata("design:type", String)
], RequestBodyLogin.prototype, "password", void 0);
exports.RequestBodyLogin = RequestBodyLogin;
class SuccessResponse {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiRW1lcnNvbiBNb3JpZXJhIiwiZW1haWwiOiJlZW1yM0B5YWhvby5jb20uYnIiLCJyb2xlcyI6ImNhbmRpZGF0ZSIsImlhdCI6MTY3ODkyMzY5OCwiZXhwIjoxNjc4OTI5Njk4fQ.RBpEC6HrrYN82wjRjZsD11BsQ9ZQ2yDL_E5PR6PqL_Y',
    }),
    __metadata("design:type", String)
], SuccessResponse.prototype, "access_token", void 0);
exports.SuccessResponse = SuccessResponse;
class SuccessGoogleResponse {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiRW1lcnNvbiBNb3JpZXJhIiwiZW1haWwiOiJlZW1yM0B5YWhvby5jb20uYnIiLCJyb2xlcyI6ImNhbmRpZGF0ZSIsImlhdCI6MTY3ODkyMzY5OCwiZXhwIjoxNjc4OTI5Njk4fQ.RBpEC6HrrYN82wjRjZsD11BsQ9ZQ2yDL_E5PR6PqL_Y',
    }),
    __metadata("design:type", String)
], SuccessGoogleResponse.prototype, "message", void 0);
exports.SuccessGoogleResponse = SuccessGoogleResponse;
class SendRecoverPasswordEmailBodyProperty {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'johndoe@email.com' }),
    __metadata("design:type", String)
], SendRecoverPasswordEmailBodyProperty.prototype, "email", void 0);
exports.SendRecoverPasswordEmailBodyProperty = SendRecoverPasswordEmailBodyProperty;
class ReponseRecoverPasswordEmail {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'An email has been sent with instructions for resetting your password.',
    }),
    __metadata("design:type", String)
], ReponseRecoverPasswordEmail.prototype, "message", void 0);
exports.ReponseRecoverPasswordEmail = ReponseRecoverPasswordEmail;
class ReponseRestPasswordEmail {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Successfully reset password',
    }),
    __metadata("design:type", String)
], ReponseRestPasswordEmail.prototype, "message", void 0);
exports.ReponseRestPasswordEmail = ReponseRestPasswordEmail;
class LoginUnauthorizedExceptionError {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 401 }),
    __metadata("design:type", Number)
], LoginUnauthorizedExceptionError.prototype, "statusCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Email address or password provided is incorrect.' }),
    __metadata("design:type", String)
], LoginUnauthorizedExceptionError.prototype, "message", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Unauthorized' }),
    __metadata("design:type", String)
], LoginUnauthorizedExceptionError.prototype, "error", void 0);
exports.LoginUnauthorizedExceptionError = LoginUnauthorizedExceptionError;
class RecoverNotFoundExeptionError {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 404 }),
    __metadata("design:type", Number)
], RecoverNotFoundExeptionError.prototype, "statusCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'There is no user registered with this email' }),
    __metadata("design:type", String)
], RecoverNotFoundExeptionError.prototype, "message", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Not Found' }),
    __metadata("design:type", String)
], RecoverNotFoundExeptionError.prototype, "error", void 0);
exports.RecoverNotFoundExeptionError = RecoverNotFoundExeptionError;
class ResetFoundExeptionError {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 404 }),
    __metadata("design:type", Number)
], ResetFoundExeptionError.prototype, "statusCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Candidate not found' }),
    __metadata("design:type", String)
], ResetFoundExeptionError.prototype, "message", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Not Found' }),
    __metadata("design:type", String)
], ResetFoundExeptionError.prototype, "error", void 0);
exports.ResetFoundExeptionError = ResetFoundExeptionError;
//# sourceMappingURL=auth-success.response.js.map