import { Injectable } from '@nestjs/common';

import { CreateCandidateProfileDto } from '../../../application/candidate-profile/dto/create-candidate-profile.dto';
import { UpdateCandidateProfileDto } from '../../../application/candidate-profile/dto/update-candidate-profile.dto';
import { CandidateProfile } from '../../../application/candidate-profile/entities/candidate-profile.entity';
import { CandidateProfileRepository } from '../../../application/candidate-profile/repository/candidate-profile.repository';
import { PrismaMySqlService } from '../../../config/database/prisma/prisma-mysql.service';
import { NotFoundError } from '../../exceptions/not-found.error';
import { ConflictError } from '../../exceptions/conflict-error';

@Injectable()
export class CandidateProfileMySqlRepository
  implements CandidateProfileRepository
{
  constructor(private readonly prisma: PrismaMySqlService) {}

  async create(profile: CreateCandidateProfileDto) {
    const areaArray = profile.others
      ? [...profile.occupationArea, ...profile.others]
      : [...profile.occupationArea];

    const userExists = await this.prisma.candidateUser.findUnique({
      where: { id: profile.candidateUserId },
    });

    if (!userExists) {
      throw new NotFoundError('Candidate user not found');
    }

    const profileExists = await this.prisma.candidateProfile.findFirst({
      where: { candidateUserId: profile.candidateUserId },
    });
    console.info(profileExists);
    if (profileExists) {
      throw new ConflictError(
        'There is already a profile registered for this user',
      );
    }

    try {
      const newProfile = await this.prisma.candidateProfile.create({
        data: {
          description: profile.description,
          phone: profile.phone,
          urlGithub: profile.urlGithub,
          urlLinkedin: profile.urlLinkedin,
          availableTime: profile.availableTime,
          areaOfInterest: profile.areaOfInterest,
          candidateUserId: profile.candidateUserId,
        },
      });

      await Promise.all(
        areaArray.map(async (area) => {
          await this.prisma.occupationArea.create({
            data: {
              title: area,
              profileId: newProfile.id,
              userId: newProfile.candidateUserId,
            },
          });
        }),
      );

      await Promise.all(
        profile.profileSkills.map(async (skill) => {
          await this.prisma.profileSkills.create({
            data: {
              stackId: skill,
              profileId: newProfile.id,
            },
          });
        }),
      );

      return newProfile;
    } catch (error) {
      console.error(error);
    }
  }

  async findAll(): Promise<CandidateProfile[]> {
    return await this.prisma.candidateProfile.findMany({
      include: {
        candidateUser: {
          select: {
            id: true,
            name: true,
            email: true,
            password: false,
            roles: true,
            provider: true,
            providerId: true,
            createdAt: true,
            updatedAt: true,
            recoverToken: true,
          },
        },
        occupationArea: true,
        profileSkills: true,
      },
    });
  }

  async findById(id: number): Promise<CandidateProfile> {
    const profile = await this.prisma.candidateProfile.findUnique({
      where: { id },
      include: {
        candidateUser: {
          select: {
            id: true,
            name: true,
            email: true,
            password: false,
            roles: true,
            provider: true,
            providerId: true,
            createdAt: true,
            updatedAt: true,
            recoverToken: true,
          },
        },
        occupationArea: true,
        profileSkills: true,
      },
    });

    return profile;
  }

  async update(id: number, profile: UpdateCandidateProfileDto): Promise<void> {
    throw new Error('Method not implemented.');
  }

  async remove(id: number): Promise<void> {
    await this.prisma.candidateProfile.delete({ where: { id } });
  }
}
