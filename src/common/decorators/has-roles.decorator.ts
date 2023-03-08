import { SetMetadata } from '@nestjs/common';
import { Role } from '../../models/role.enum';

export const HasRoles = (...roles: Role[]) => SetMetadata('roles', roles);
