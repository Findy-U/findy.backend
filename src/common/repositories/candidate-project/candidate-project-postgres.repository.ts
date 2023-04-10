import { Injectable } from '@nestjs/common';
import { CandidateProject, Roles, Stack } from '@prisma/client';
import { CreateCandidateProjectDto } from '../../../application/candidate-project/dto/create-candidate-project.dto';
import { UpdateCandidateProjectDto } from '../../../application/candidate-project/dto/update-candidate-project.dto';
import { CandidateProjectRepository } from '../../../application/candidate-project/repositories/candidate-project.repository';
import { PrismaPostgresService } from '../../../config/database/prisma/prisma-postgres.service';
import {
  CandidateProjectResponse,
  CandidateUser,
} from '../../../models/candidate-project';
import { NotFoundError } from '../../exceptions/not-found.error';

@Injectable()
export class CandidateProjectPostgresRepository
  implements CandidateProjectRepository
{
  constructor(private readonly prisma: PrismaPostgresService) {}

  async create(
    project: CreateCandidateProjectDto,
    user: CandidateUser,
  ): Promise<CandidateProject> {
    const rolesArray = project.others
      ? [...project.professional, ...project.others]
      : [...project.professional];

    try {
      const newProject = await this.prisma.candidateProject.create({
        data: {
          name: project.name,
          responsible: project.responsible,
          contactResponsible: project.contactResponsible,
          urlLinkediResponsible: project.urlLinkediResponsible,
          urlTeamSelection: project.urlTeamSelection,
          projectScope: project.projectScope,
          candidateUserId: user.id,
          findyHelp: project.findyHelp,
          contactLeaders: project.contactLeaders,
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

      // await Promise.all(
      //   project.leaders.map(async (item: any) => {
      //     await this.prisma.leader.create({
      //       data: {
      //         projectId: newProject.id,
      //         userId: item,
      //       },
      //     });
      //   }),
      // );

      return newProject;
    } catch (error) {
      console.error(error);
      throw new Error('Internal server error');
    }
  }

  async findAll(): Promise<CandidateProjectResponse[]> {
    return await this.prisma.candidateProject.findMany({
      select: {
        id: true,
        name: true,
        projectScope: true,
        urlTeamSelection: true,
        responsible: true,
        contactResponsible: true,
        urlLinkediResponsible: true,
        findyHelp: true,
        candidateUserId: true,
        contactLeaders: true,
        isActive: true,
        createdAt: true,
        updatedAt: true,
        professional: true,
        language: true,
      },
    });
  }

  async findById(id: number): Promise<CandidateProjectResponse> {
    const project = await this.prisma.candidateProject.findUnique({
      where: { id },
      include: {
        language: true,
        professional: true,
      },
    });
    if (!project) {
      throw new NotFoundError('Project not found');
    }
    return project;
  }

  async findByName(name: string): Promise<CandidateProject> {
    return await this.prisma.candidateProject.findUnique({ where: { name } });
  }

  async findAllRolesProject(): Promise<Roles[]> {
    return await this.prisma.roles.findMany();
  }

  async findByIdRoleProject(id: number): Promise<Roles> {
    const role = await this.prisma.roles.findUnique({ where: { id } });
    if (!role) {
      throw new NotFoundError('Not found Role');
    }
    return role;
  }

  async findAllSkillsProject(): Promise<Stack[]> {
    return await this.prisma.stack.findMany();
  }

  async findByIdSkillProject(id: number): Promise<Stack> {
    const skill = await this.prisma.stack.findUnique({ where: { id } });
    if (!skill) {
      throw new NotFoundError('Not found Skill');
    }
    return skill;
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

  async remove(id: number): Promise<{ message: string }> {
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
