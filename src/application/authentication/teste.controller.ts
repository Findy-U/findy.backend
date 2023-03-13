import { Controller, Get, UseGuards } from '@nestjs/common';
import { CurrentUser } from '../../common/decorators/current-user.decorator';
import { HasRoles } from '../../common/decorators/has-roles.decorator';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { RolesGuard } from '../../common/guards/roles.guard';
import { Role } from '../../models/roles.enum';
import { AuthService } from './auth.service';

@HasRoles(Role.Candidate)
@UseGuards(JwtAuthGuard, RolesGuard)
@Controller('teste')
export class TesteController {
  constructor(private readonly auhtSerive: AuthService) {}

  // @UseGuards(JwtAuthGuard)
  @Get()
  async findAll() {
    return 'Rota protegida pelo auth jwt guard';
  }

  @Get('me')
  getMe(@CurrentUser() curruentUser: any) {
    return curruentUser;
  }
}
