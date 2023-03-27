import { Injectable } from '@nestjs/common';
import { CandidateProject } from '@prisma/client';
import { CreateCandidateProjectDto } from '../../../application/candidate-project/dto/create-candidate-project.dto';
import { UpdateCandidateProjectDto } from '../../../application/candidate-project/dto/update-candidate-project.dto';
import { CandidateProjectRepository } from '../../../application/candidate-project/repositories/candidate-project.repository';
import { PrismaService } from '../../../config/database/prisma/prisma.service';
import { CandidateProjectInterface } from '../../../models/candidate-project';
import { NotFoundError } from '../../exceptions/not-found.error';

@Injectable()
export class CandidateProjectSqliteRepository
  implements CandidateProjectRepository
{
  constructor(private readonly prisma: PrismaService) {}

  async create(
    project: CreateCandidateProjectDto,
    user: any,
  ): Promise<CandidateProject> {
    try {
      const newProject = await this.prisma.candidateProject.create({
        data: {
          name: project.name,
          phone: project.phone,
          projectScope: project.projectScope,
          candidateUserId: user.id,
        },
      });

      await Promise.all(
        project.language.map(async (item: any) => {
          await this.prisma.projectStack.create({
            data: {
              projectId: newProject.id,
              stackId: item,
            },
          });
        }),
      );

      await Promise.all(
        project.professional.map(async (item: any) => {
          await this.prisma.projectRoles.create({
            data: {
              projectId: newProject.id,
              rolesId: item,
            },
          });
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

  async update(id: number, project: UpdateCandidateProjectDto): Promise<void> {
    const projectExists = await this.findById(id);
    if (!projectExists) {
      throw new NotFoundError('Project not found');
    }
    try {
      // await project.projectStacks?.map(async (item: any) => {
      //   await this.prisma.projectStack.updateMany({
      //     where: { id: item.id },
      //     data: {
      //       stackId: item.stackId,
      //     },
      //   });
      // });

      // await project.projectRoles?.map(async (item: any) => {
      //   await this.prisma.projectRoles.updateMany({
      //     where: { id: item.id },
      //     data: {
      //       rolesId: item.roleId,
      //     },
      //   });
      // });

      await this.prisma.candidateProject.update({
        where: { id },
        data: {
          name: project.name,
          phone: project.phone,
          projectScope: project.projectScope,
        },
      });
    } catch (error) {
      console.error(error);
      // throw new Error('Internal server error');
    }
  }

  async delete(id: number): Promise<{ message: string }> {
    const projectExists = await this.findById(id);
    if (!projectExists) {
      throw new NotFoundError('Project not found');
    }
    try {
      await this.prisma.candidateProject.delete({ where: { id } });
      return { message: 'Successfully removed!' };
    } catch (error) {
      throw new Error('Não foi possível excluir');
    }
  }
}
