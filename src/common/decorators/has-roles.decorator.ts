import { SetMetadata } from '@nestjs/common';
import { Role } from '../../models/roles.enum';

export const HasRoles = (...roles: Role[]) => SetMetadata('roles', roles);
