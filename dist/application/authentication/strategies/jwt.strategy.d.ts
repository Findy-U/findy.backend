import { ConfigService } from '@nestjs/config';
import { Strategy } from 'passport-jwt';
import { UserFromJwt } from '../../../models/candidate-user-from-Jwt';
import { UserPayload } from '../../../models/candidate-user-payload';
declare const JwtStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtStrategy extends JwtStrategy_base {
    private configService;
    constructor(configService: ConfigService);
    validate(payload: UserPayload): Promise<UserFromJwt>;
}
export {};
