import { ConfigService } from '@nestjs/config';
declare const GoogleOAuthGuard_base: import("@nestjs/passport").Type<import("@nestjs/passport").IAuthGuard>;
export declare class GoogleOAuthGuard extends GoogleOAuthGuard_base {
    private configService;
    constructor(configService: ConfigService);
}
export {};
