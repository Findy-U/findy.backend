import { Injectable } from '@nestjs/common';

import { CreateCandidateProfileDto } from '../../../application/candidate-profile/dto/create-candidate-profile.dto';
import { UpdateCandidateProfileDto } from '../../../application/candidate-profile/dto/update-candidate-profile.dto';
import { CandidateProfile } from '../../../application/candidate-profile/entities/candidate-profile.entity';
import { CandidateProfileRepository } from '../../../application/candidate-profile/repository/candidate-profile.repository';
import { PrismaService } from '../../../config/database/prisma/prisma.service';
import { capitalizeFirstLetter } from '../../helpers/capitalize-first-letter';

@Injectable()
export class CandidateProfileRepositoryMySQL
  implements CandidateProfileRepository
{
  constructor(private readonly prisma: PrismaService) {}

  async create(profile: CreateCandidateProfileDto) {
    const areaArray = [...profile.occupationArea];

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
              title: area.title,
              profileId: newProfile.id,
            },
          });
        }),
      );

      await Promise.all(
        profile.profileSkills.map(async (skill) => {
          await this.prisma.skill.create({
            data: {
              type: skill.type as any,
              name: capitalizeFirstLetter(skill.name),
              candidateProfile: {
                connect: { id: newProfile.id },
              },
            },
          });
        }),
      );

      return newProfile;
    } catch (error) {
      console.error(error);
      throw new Error('O perfil já foi criado!');
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
        Skill: true,
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
        Skill: true,
      },
    });
  }

  async update(id: number, profile: UpdateCandidateProfileDto): Promise<any> {
    try {
      const profileUpdated = await this.prisma.candidateProfile.update({
        where: { id },
        data: {
          description: profile.description,
          phone: profile.phone,
          urlGithub: profile.urlGithub,
          urlLinkedin: profile.urlLinkedin,
          availableTime: profile.availableTime,
          areaOfInterest: profile.areaOfInterest,
        },
      });
      if (profile.profileSkills) {
        Promise.all(
          profile.profileSkills.map(async (skill) => {
            if (skill.name === null) {
              await this.prisma.skill.delete({ where: { id: skill.id } });
            } else {
              const skillExists = await this.prisma.skill.findUnique({
                where: { id: skill.id },
              });

              if (!skillExists) {
                await this.prisma.skill.create({
                  data: {
                    type: skill.type as any,
                    name: capitalizeFirstLetter(skill.name),
                    candidateProfile: {
                      connect: { id: profileUpdated.id },
                    },
                  },
                });
              } else {
                await this.prisma.skill.update({
                  where: { id: skill.id },
                  data: {
                    name: capitalizeFirstLetter(skill.name),
                    candidateProfile: {
                      connect: { id: profileUpdated.id },
                    },
                  },
                });
              }
            }
          }),
        );
      }
      if (profile.occupationArea) {
        Promise.all(
          profile.occupationArea.map(async (area) => {
            const areaExists = await this.prisma.occupationArea.findUnique({
              where: { id: area.id },
            });
            console.log(areaExists);

            if (!areaExists) {
              await this.prisma.occupationArea.create({
                data: {
                  title: area.title,
                  profileId: profileUpdated.id,
                },
              });
            } else {
              await this.prisma.occupationArea.update({
                where: { id: area.id },
                data: {
                  title: area.title,
                  CandidateProfile: {
                    connect: { id: profileUpdated.id },
                  },
                },
              });
            }
          }),
        );
      }
      return profileUpdated;
    } catch (error) {}
  }

  async remove(id: number): Promise<void> {
    await this.prisma.candidateProfile.delete({ where: { id } });
  }
}
