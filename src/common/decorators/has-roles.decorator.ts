import { SetMetadata } from '@nestjs/common';
import { Role } from '../interfaces/authentication/roles.enum';

export const HasRoles = (...roles: Role[]) => SetMetadata('roles', roles);
