import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { CreateCandidateUserDto } from '../../../application/candidate-user/dto/create-candidate-user.dto';
import { UpdateCandidateUserDto } from '../../../application/candidate-user/dto/update-candidate-user.dto';
import { CandidateUser } from '../../../application/candidate-user/entities/candidate-user.entity';
import { CandidateUserRepository } from '../../../application/candidate-user/repositories/candidate-user.repository';
import { PrismaMySqlService } from '../../../config/database/prisma/prisma-mysql.service';
import { AuthProviderType } from '../../interfaces/authentication/auth-provider.enum';
import { SALT_BCRYPT } from '../../constants/constants';
import { CandidateUserSerialize } from '../../serializers/candidate-user.serialize';
import { Role } from '../../interfaces/authentication/roles.enum';

@Injectable()
export class CandidateUserMySqlRepository implements CandidateUserRepository {
  constructor(
    private readonly candidateUserSerialize: CandidateUserSerialize,
    private readonly prisma: PrismaMySqlService,
  ) {}

  async create(
    candidate: CreateCandidateUserDto,
    token,
    expiredAt,
  ): Promise<CandidateUser> {
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
      confirmationToken: token,
      expiredConfirmationToken: expiredAt,
      activated: candidate.activated,
    });
    return await this.prisma.candidateUser.create({ data });
  }

  async findAll(): Promise<CandidateUser[]> {
    return await this.prisma.candidateUser.findMany({
      include: {
        CandidateProfile: true,
      },
    });
  }

  async findById(id: number) {
    return await this.prisma.candidateUser.findUnique({
      where: { id },
      include: { CandidateProfile: true },
    });
  }

  async findByEmail(email: string): Promise<CandidateUser> {
    return await this.prisma.candidateUser.findUnique({ where: { email } });
  }

  async findSurveyById(id: number): Promise<any> {
    const result = await this.prisma.candidateUser.findUnique({
      where: { id },
      include: {
        CandidateProfile: true,
        CandidateUserDetails: true,
        SurveyMarketInformation: true,
        SurveyProfessionalSituation: true,
        SurveyFeelings: true,
        SurveyNeeds: {
          include: {
            PrincipalDifficulties: true,
            FindyHelp: true,
          },
        },
      },
    });

    return result;
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

  remove(id: number): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
