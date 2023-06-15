import { ConfigService } from '@nestjs/config';
import { Strategy } from 'passport-jwt';
import { UserPayload } from '../../../common/interfaces/candidate-user/candidate-user-payload';
import { UserFromJwt } from '../../../common/interfaces/candidate-user/candidate-user-from-Jwt';
declare const JwtStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtStrategy extends JwtStrategy_base {
    private configService;
    constructor(configService: ConfigService);
    validate(payload: UserPayload): Promise<UserFromJwt>;
}
export {};
