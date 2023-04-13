import { Injectable } from '@nestjs/common';

import { CreateCandidateProfileDto } from 'src/application/candidate-profile/dto/create-candidate-profile.dto';
import { UpdateCandidateProfileDto } from 'src/application/candidate-profile/dto/update-candidate-profile.dto';
import { CandidateProfile } from 'src/application/candidate-profile/entities/candidate-profile.entity';
import { CandidateProfileRepository } from 'src/application/candidate-profile/repository/candidate-profile.repository';
import { PrismaService } from 'src/config/database/prisma/prisma.service';
import { NotFoundError } from '../../exceptions/not-found.error';

@Injectable()
export class CandidateProfileSQLiteRepository
  implements CandidateProfileRepository
{
  constructor(private readonly prisma: PrismaService) {}

  async create(profile: CreateCandidateProfileDto) {
    const areaArray = profile.others
      ? [...profile.occupationArea, ...profile.others]
      : [...profile.occupationArea];

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
    return await this.prisma.candidateProfile.findUnique({
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
  }

  async update(id: number, profile: UpdateCandidateProfileDto): Promise<void> {
    throw new Error('Method not implemented.');
  }

  async remove(id: number): Promise<void> {
    await this.prisma.candidateProfile.delete({ where: { id } });
  }
}
