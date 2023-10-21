import { Injectable } from '@nestjs/common';
import { CandidateProject } from '@prisma/client';
import { CreateCandidateProjectDto } from '../../../application/candidate-project/dto/create-candidate-project.dto';
import { UpdateCandidateProjectDto } from '../../../application/candidate-project/dto/update-candidate-project.dto';
import { CandidateProjectRepository } from '../../../application/candidate-project/repositories/candidate-project.repository';
import { PrismaService } from '../../../config/database/prisma/prisma.service';
import { NotFoundError } from '../../exceptions/not-found.error';
import {
  CandidateProjectResponse,
  CandidateUser,
} from '../../interfaces/candidate-projects/candidate-project';

@Injectable()
export class CandidateProjectRepositoryMySQL
  implements CandidateProjectRepository
{
  constructor(private readonly prisma: PrismaService) {}

  async create(
    project: CreateCandidateProjectDto,
    user: CandidateUser,
  ): Promise<CandidateProject> {
    console.log(project, user);
    try {
      if (project.languages.length || project.professionals.length) {
        const newProject = await this.prisma.candidateProject.create({
          data: {
            projectName: project.projectName,
            responsible: user.name,
            responsibleEmail: user.email,
            commitmentTime: project.commitmentTime,
            urlTeamSelection: project.urlTeamSelection,
            shortDescription: project.shortDescription,
            detailedDescription: project.detailedDescription,
            projectTheme: project.projectTheme,
            expectedDuration: project.expectedDuration,
            startDate: new Date(project.startDate),
            teamSize: String(project.teamSize),
            isActive: true,
            candidateUserId: user.id,
          },
        });

        await Promise.all(
          project.languages.map(async (item: any) => {
            switch (item.type.toUpperCase()) {
              case 'LANGUAGES':
                await this.prisma.programmingLanguages.create({
                  data: { name: item.name, candidateProjectId: newProject.id },
                });
                break;
              case 'FRAMEWORKS':
                await this.prisma.frameworksLibraries.create({
                  data: { name: item.name, candidateProjectId: newProject.id },
                });
                break;
              case 'DATABASE':
                await this.prisma.dataBases.create({
                  data: { name: item.name, candidateProjectId: newProject.id },
                });
                break;
              case 'DESIGNER':
                await this.prisma.designerTools.create({
                  data: { name: item.name, candidateProjectId: newProject.id },
                });
                break;
              case 'CLOUD':
                await this.prisma.cloudServices.create({
                  data: { name: item.name, candidateProjectId: newProject.id },
                });
                break;
              case 'DEVOPS':
                await this.prisma.devOpsTools.create({
                  data: { name: item.name, candidateProjectId: newProject.id },
                });
                break;
              case 'TESTING':
                await this.prisma.testingTools.create({
                  data: { name: item.name, candidateProjectId: newProject.id },
                });
                break;
              default:
                break;
            }
          }),
        );

        await Promise.all(
          project.professionals.map(async (item: any) => {
            switch (item.type.toUpperCase()) {
              case 'DEVELOPER':
                await this.prisma.develperRoles.create({
                  data: {
                    title: item.title,
                    quantity: item.quantity,
                    candidateProjectId: newProject.id,
                  },
                });
                break;
              case 'DESIGNER':
                await this.prisma.designerRoles.create({
                  data: {
                    title: item.title,
                    quantity: item.quantity,
                    candidateProjectId: newProject.id,
                  },
                });
                break;
              case 'PRODUCT':
                await this.prisma.productRoles.create({
                  data: {
                    title: item.title,
                    quantity: item.quantity,
                    candidateProjectId: newProject.id,
                  },
                });
                break;
              case 'QAROLE':
                await this.prisma.qARoles.create({
                  data: {
                    title: item.title,
                    quantity: item.quantity,
                    candidateProjectId: newProject.id,
                  },
                });
                break;
              case 'DATAROLE':
                await this.prisma.dataRoles.create({
                  data: {
                    title: item.title,
                    quantity: item.quantity,
                    candidateProjectId: newProject.id,
                  },
                });
                break;
              case 'AGILEROLE':
                await this.prisma.agileRoles.create({
                  data: {
                    title: item.title,
                    quantity: item.quantity,
                    candidateProjectId: newProject.id,
                  },
                });
                break;
              default:
                break;
            }
          }),
        );

        return newProject;
      } else {
        throw new Error(
          'É necessário informar pelo menos uma linguagem ou profissional',
        );
      }
    } catch (error) {
      console.error(error);
      throw new Error('Internal server error');
    }
  }

  async findAll(): Promise<any[]> {
    return await this.prisma.candidateProject.findMany({
      select: {
        id: true,
        projectName: true,
        shortDescription: true,
        detailedDescription: true,
        projectTheme: true,
        startDate: true,
        expectedDuration: true,
        commitmentTime: true,
        teamSize: true,
        isActive: true,
        candidateUserId: true,
        ProgrammingLanguages: {
          select: {
            name: true,
          },
        },
        FrameworksLibraries: {
          select: {
            name: true,
          },
        },
        DataBases: {
          select: {
            name: true,
          },
        },
        DesignerTools: {
          select: {
            name: true,
          },
        },
        CloudServices: {
          select: {
            name: true,
          },
        },
        DevOpsTools: {
          select: {
            name: true,
          },
        },
        TestingTools: {
          select: {
            name: true,
          },
        },
        DeveloperRoles: {
          select: {
            title: true,
            quantity: true,
          },
        },
        DesignerRoles: {
          select: {
            title: true,
            quantity: true,
          },
        },
        ProductRoles: {
          select: {
            title: true,
            quantity: true,
          },
        },
        QARoles: {
          select: {
            title: true,
            quantity: true,
          },
        },
        DataRoles: {
          select: {
            title: true,
            quantity: true,
          },
        },
      },
    });
  }

  async findById(id: number): Promise<any> {
    const project = await this.prisma.candidateProject.findUnique({
      where: { id },
      select: {
        id: true,
        projectName: true,
        shortDescription: true,
        detailedDescription: true,
        projectTheme: true,
        startDate: true,
        expectedDuration: true,
        commitmentTime: true,
        teamSize: true,
        urlTeamSelection: true,
        isActive: true,
        candidateUserId: true,
        CandidateUser: {
          select: {
            name: true,
            email: true,
          },
        },
        ProgrammingLanguages: {
          select: {
            name: true,
          },
        },
        FrameworksLibraries: {
          select: {
            name: true,
          },
        },
        DataBases: {
          select: {
            name: true,
          },
        },
        DesignerTools: {
          select: {
            name: true,
          },
        },
        CloudServices: {
          select: {
            name: true,
          },
        },
        DevOpsTools: {
          select: {
            name: true,
          },
        },
        TestingTools: {
          select: {
            name: true,
          },
        },
        DeveloperRoles: {
          select: {
            title: true,
            quantity: true,
          },
        },
        DesignerRoles: {
          select: {
            title: true,
            quantity: true,
          },
        },
        ProductRoles: {
          select: {
            title: true,
            quantity: true,
          },
        },
        QARoles: {
          select: {
            title: true,
            quantity: true,
          },
        },
        DataRoles: {
          select: {
            title: true,
            quantity: true,
          },
        },
      },
    });
    if (!project) {
      throw new NotFoundError('Project not found');
    }
    return project;
  }

  async findByName(name: string): Promise<CandidateProject> {
    return await this.prisma.candidateProject.findUnique({
      where: { projectName: name },
    });
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
          projectName: project.projectName,
          responsible: project.responsible,
          urlTeamSelection: project.urlTeamSelection,
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
