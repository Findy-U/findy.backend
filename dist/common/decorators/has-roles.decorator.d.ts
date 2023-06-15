import { Role } from '../interfaces/authentication/roles.enum';
export declare const HasRoles: (...roles: Role[]) => import("@nestjs/common").CustomDecorator<string>;
