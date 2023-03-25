import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Role } from '../../models/roles.enum';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private relector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredRoles = this.relector.getAllAndOverride<Role[]>('roles', [
      context.getHandler(),
      context.getClass(),
    ]);

    if (!requiredRoles) {
      return true;
    }

    console.log(requiredRoles);

    const { user } = context.switchToHttp().getRequest();
    return requiredRoles.some((role) => user?.roles?.includes(role));
  }
}
