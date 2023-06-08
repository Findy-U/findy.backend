import { Injectable } from '@nestjs/common';
import { CreateCandidateUserDetailsDto } from '../../../application/candidate-user-details/dto/create-candidate-user-details.dto';
import { UpdateCandidateUserDetailsDto } from '../../../application/candidate-user-details/dto/update-candidate-user-details.dto';
import { CandidateUserDetailsEntity } from '../../../application/candidate-user-details/entities/candidate-user-details.entity';
import { CandidateUserDetailsRepository } from '../../../application/candidate-user-details/repositories/candidate-user-details.repository';
import { PrismaPostgresService } from '../../../config/database/prisma/prisma-postgres.service';
import { CandidateUserDetailsSerialize } from '../../serializers/candidate-user-details.serialize';

@Injectable()
export class CandidateUserDetailsPostgresRepository
  implements CandidateUserDetailsRepository
{
  constructor(
    private readonly candidateUserDetailsSerialize: CandidateUserDetailsSerialize,
    private readonly prisma: PrismaPostgresService,
  ) {}

  async create(
    candidate: CreateCandidateUserDetailsDto,
  ): Promise<CandidateUserDetailsEntity> {
    const data = this.candidateUserDetailsSerialize.requestToDb({
      ...candidate,
      gender: candidate.gender,
      birthDate: candidate.birthDate,
      residencePlace: candidate.residencePlace,
    });
    return await this.prisma.candidateUserDetails.create({ data });
  }

  async findAll(): Promise<CandidateUserDetailsEntity[]> {
    return await this.prisma.candidateUserDetails.findMany();
  }

  async findById(id: number) {
    return await this.prisma.candidateUserDetails.findUnique({
      where: { id },
    });
  }

  async update(
    id: number,
    details: UpdateCandidateUserDetailsDto,
  ): Promise<CandidateUserDetailsEntity> {
    return await this.prisma.candidateUserDetails.update({
      where: { id },
      data: details,
    });
  }
}
