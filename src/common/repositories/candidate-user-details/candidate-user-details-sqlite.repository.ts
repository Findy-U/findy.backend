import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { CreateCandidateUserDetailsDto } from '../../../application/candidate-user-details/dto/create-candidate-user-details.dto';
import { UpdateCandidateUserDetailsDto } from '../../../application/candidate-user-details/dto/update-candidate-user-details.dto';
import { CandidateUserDetailsEntity } from '../../../application/candidate-user-details/entities/candidate-user-details.entity';
import { CandidateUserDetailsRepository } from '../../../application/candidate-user-details/repositories/candidate-user-details.repository';
import { PrismaService } from '../../../config/database/prisma/prisma.service';
import { AuthProviderType } from '../../interfaces/authentication/auth-provider.enum';
import { SALT_BCRYPT } from '../../constants/constants';
import { CandidateUserDetailsSerialize } from '../../serializers/candidate-user-details.serialize';
import { Role } from '../../interfaces/authentication/roles.enum';
@Injectable()
export class CandidateUserDetailsSqliteRepository implements CandidateUserDetailsRepository {
  constructor(
    private readonly candidateUserDetailsSerialize: CandidateUserDetailsSerialize,
    private readonly prisma: PrismaService,
  ) { }

  async create(
    candidate: CreateCandidateUserDetailsDto,
  ): Promise<CandidateUserDetailsEntity>
  {
    const data = this.candidateUserDetailsSerialize.requestToDb({
      ...candidate,
      gender: candidate.gender
      birthDate: candidate.birthDate
      residencePlace: candidate.residencePlace
    });
    return await this.prisma.candidateUserDetails.create({ data });
  }

  async findAll(): Promise<any[]> {
    return await this.prisma.candidateUserDetails.findMany();
  }
  async findById(id: number)
  {
    return await this.prisma.candidateUserDetails.findUnique({
      where: { id },
    });
  }

  async update(
    id: number,
    details: UpdateCandidateUserDetailsDto,
  ): Promise<CandidateUserDetailsEntity>
  {
    return await this.prisma.candidateUserDetails.update({
      where: { id },
      data: details,
    });
  }
}
