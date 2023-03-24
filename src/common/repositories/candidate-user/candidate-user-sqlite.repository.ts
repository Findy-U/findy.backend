import { Injectable } from '@nestjs/common';
import { CreateCandidateUserDto } from '../../../application/candidate-user/dto/create-cadidate-user.dto';
import { UpdateCandidateUserDto } from '../../../application/candidate-user/dto/update-cadidate-user.dto';
import { CandidateUser } from '../../../application/candidate-user/entities/candidate-user.entity';
import { CandidateUserRepository } from '../../../application/candidate-user/repositories/candidate-user.repository';
import { PrismaService } from '../../../config/database/prisma/prisma.service';

@Injectable()
export class CandidateUserSqliteRepository implements CandidateUserRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(candidate: CreateCandidateUserDto): Promise<CandidateUser> {
    return await this.prisma.candidateUser.create({ data: candidate });
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
