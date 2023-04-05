import { Injectable } from '@nestjs/common';
import { CandidateProject } from '@prisma/client';
import { log } from 'console';
import { CreateCandidateProjectDto } from '../../../application/candidate-project/dto/create-candidate-project.dto';
import { UpdateCandidateProjectDto } from '../../../application/candidate-project/dto/update-candidate-project.dto';
import { CandidateProjectRepository } from '../../../application/candidate-project/repositories/candidate-project.repository';
import { PrismaService } from '../../../config/database/prisma/prisma.service';
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
    const rolesArray = project.others
      ? [...project.professional, ...project.others]
      : [...project.professional];
    console.log(rolesArray);

    try {
      const newProject = await this.prisma.candidateProject.create({
        data: {
          name: project.name,
          responsible: user.name,
          urlTeamSelection: project.urlTeamSelection,
          projectScope: project.projectScope,
          candidateUserId: user.id,
          findyHelp: project.findyHelp,
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
        rolesArray.map(async (item: any) => {
          await this.prisma.projectRoles.create({
            data: {
              projectId: newProject.id,
              title: item,
            },
          });
        }),
      );

      await Promise.all(
        project.leaders.map(async (item: any) => {
          await this.prisma.leader.create({
            data: {
              projectId: newProject.id,
              userId: item,
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

  async findAll(): Promise<any[]> {
    return await this.prisma.candidateProject.findMany({
      select: {
        id: true,
        name: true,
        projectScope: true,
        responsible: true,
        urlTeamSelection: true,
        professional: true,
        language: true,
      },
    });
  }

  async findById(id: number): Promise<CandidateProject> {
    return await this.prisma.candidateProject.findUnique({
      where: { id },
      include: {
        language: true,
        professional: true,
        users: true,
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
      await this.prisma.candidateProject.update({
        where: { id },
        data: {
          name: project.name,
          responsible: project.responsible,
          urlTeamSelection: project.urlTeamSelection,
          findyHelp: project.findyHelp,
          projectScope: project.projectScope,
        },
      });
    } catch (error) {
      console.error(error);
      // throw new Error('Internal server error');
    }
  }

  async findRolesProject(id: number) {
    return await this.prisma.roles.findUnique({ where: { id } });
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
