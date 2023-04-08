import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { CreateCandidateUserDto } from '../../../application/candidate-user/dto/create-cadidate-user.dto';
import { UpdateCandidateUserDto } from '../../../application/candidate-user/dto/update-cadidate-user.dto';
import { CandidateUser } from '../../../application/candidate-user/entities/candidate-user.entity';
import { CandidateUserRepository } from '../../../application/candidate-user/repositories/candidate-user.repository';
import { PrismaPostgresService } from '../../../config/database/prisma/prisma-postgres.service';
import { AuthProviderType } from '../../../models/auth-provider.enum';
import { Role } from '../../../models/roles.enum';
import { SALT_BCRYPT } from '../../constants/constants';
import { CandidateUserSerialize } from '../../serializers/candidate-user.serialize';
@Injectable()
export class CandidateUserPostgresRepository
  implements CandidateUserRepository
{
  constructor(
    private readonly prisma: PrismaPostgresService,
    private readonly candidateUserSerialize: CandidateUserSerialize,
  ) {}

  async create(candidate: CreateCandidateUserDto): Promise<CandidateUser> {
    let pwdHashed = '';
    if (candidate.password) {
      pwdHashed = await bcrypt.hash(candidate.password, SALT_BCRYPT);
    }
    const data = this.candidateUserSerialize.requestToDb({
      ...candidate,
      password: pwdHashed,
      roles: Role.Candidate,
      provider: candidate.provider
        ? candidate.provider
        : AuthProviderType.findy,
      providerId: candidate.providerId ? candidate.providerId : null,
    });
    return await this.prisma.candidateUser.create({ data });
  }

  async findAll(): Promise<CandidateUser[]> {
    return await this.prisma.candidateUser.findMany();
  }
  async findById(id: number) {
    return await this.prisma.candidateUser.findUnique({ where: { id } });
  }

  async findByEmail(email: string): Promise<CandidateUser> {
    return await this.prisma.candidateUser.findUnique({ where: { email } });
  }

  async update(
    id: number,
    cadidate: UpdateCandidateUserDto,
  ): Promise<CandidateUser> {
    return await this.prisma.candidateUser.update({
      where: { id },
      data: cadidate,
    });
  }
}
