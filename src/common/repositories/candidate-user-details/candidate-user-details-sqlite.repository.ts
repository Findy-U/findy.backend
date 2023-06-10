import { Injectable } from '@nestjs/common';
import { CreateCandidateUserDetailsDto } from '../../../application/candidate-user-details/dto/create-candidate-user-details.dto';
import { UpdateCandidateUserDetailsDto } from '../../../application/candidate-user-details/dto/update-candidate-user-details.dto';
import { CandidateUserDetailsEntity } from '../../../application/candidate-user-details/entities/candidate-user-details.entity';
import { CandidateUserDetailsRepository } from '../../../application/candidate-user-details/repositories/candidate-user-details.repository';
import { PrismaService } from '../../../config/database/prisma/prisma.service';

@Injectable()
export class CandidateUserDetailsSqliteRepository
  implements CandidateUserDetailsRepository
{
  constructor(private readonly prisma: PrismaService) {}

  async create(
    candidate: CreateCandidateUserDetailsDto,
  ): Promise<CandidateUserDetailsEntity> {
    return await this.prisma.candidateUserDetails.create({
      data: {
        gender: candidate.gender,
        birthDate: new Date(candidate.birthDate),
        residencePlace: candidate.residencePlace,
        candidateUserId: candidate.candidateUserId,
      },
    });
  }

  async findAll(): Promise<any[]> {
    return await this.prisma.candidateUserDetails.findMany();
  }
  async findById(id: number) {
    return await this.prisma.candidateUserDetails.findUnique({
      where: { id },
    });
  }
  async findUnique(
    candidateUserId: number,
  ): Promise<CandidateUserDetailsEntity> {
    return await this.prisma.candidateUserDetails.findUnique({
      where: { candidateUserId },
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
