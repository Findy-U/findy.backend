import { Injectable } from '@nestjs/common';
import { CandidateProject } from '@prisma/client';
import { CreateCandidateProjectDto } from '../../../application/candidate-project/dto/create-candidate-project.dto';
import { UpdateCandidateProjectDto } from '../../../application/candidate-project/dto/update-candidate-project.dto';
import { CandidateProjectRepository } from '../../../application/candidate-project/repositories/candidate-project.repository';
import { PrismaService } from '../../../config/database/prisma/prisma.service';
import { CandidateProjectInterface } from '../../../models/candidate-project';

@Injectable()
export class CandidateProjectSqliteRepository
  implements CandidateProjectRepository
{
  constructor(private readonly prisma: PrismaService) {}

  async create(
    project: CreateCandidateProjectDto,
    user,
  ): Promise<CandidateProject> {
    console.log(project);

    try {
      const newProject = await this.prisma.candidateProject.create({
        data: {
          name: project.name,
          phone: project.phone,
          projectScope: project.projectScope,
          candidateUserId: user.id,
        },
      });

      await this.prisma.projectStack.create({
        data: {
          stackId: 1,
          projectId: 1,
        },
      });
      // await Promise.all(
      //   project.language.map(async (item: any) => {
      //     await this.prisma.projectStack.create({
      //       data: {
      //         stackId: item,
      //         projectId: newProject.id,
      //       },
      //     });
      //   }),
      // );

      await Promise.all(
        project.professional.map(async (item: any) => {
          console.log('g');
        }),
      );

      return newProject;
    } catch (error) {
      console.error(error);
      throw new Error('Internal server error');
    }
  }

  async findAll(): Promise<CandidateProjectInterface[]> {
    return await this.prisma.candidateProject.findMany({
      select: {
        id: true,
        name: true,
        phone: true,
        projectScope: true,
        CandidateUser: {
          select: {
            name: true,
            email: true,
            roles: true,
          },
        },
      },
    });
  }

  async findById(id: number): Promise<CandidateProject> {
    return await this.prisma.candidateProject.findUnique({
      where: { id },
      include: {
        language: true,
        professional: true,
      },
    });
  }

  async findByName(name: string): Promise<CandidateProject> {
    return await this.prisma.candidateProject.findUnique({ where: { name } });
  }

  update(id: number, project: UpdateCandidateProjectDto) {
    throw new Error('Method not implemented.');
  }

  delete(id: number): Promise<string> {
    throw new Error('Method not implemented.');
  }
}
