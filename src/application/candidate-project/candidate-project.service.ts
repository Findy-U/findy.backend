import { Injectable } from '@nestjs/common';
import { ConflictError } from '../../common/exceptions/conflict-error';
import { CreateCandidateProjectDto } from './dto/create-candidate-project.dto';
import { UpdateCandidateProjectDto } from './dto/update-candidate-project.dto';
import { CandidateProjectRepository } from './repositories/candidate-project.repository';

@Injectable()
export class CandidateProjectService {
  constructor(
    private readonly candidateProjectRepository: CandidateProjectRepository,
  ) {}

  async create(createProject: CreateCandidateProjectDto) {
    const projectExists = await this.candidateProjectRepository.findByName(
      createProject.name,
    );

    if (projectExists) {
      throw new ConflictError('Project name alread exists');
    }
    return await this.candidateProjectRepository.create(createProject);
  }

  findAll() {
    return this.candidateProjectRepository.findAll();
  }

  findOne(id: number) {
    return this.candidateProjectRepository.findById(id);
  }

  async updateProjectData(
    id: number,
    updateProjectDto: UpdateCandidateProjectDto,
  ) {
    return 'wait this.prisma.candidateProject.update';
  }

  async updateLanguageAndTools(
    id: number,
    updateProjectDto: UpdateCandidateProjectDto,
  ) {
    return 'olá';
  }

  async updateProfessional(
    id: number,
    updateProjectDto: UpdateCandidateProjectDto,
  ) {
    return 'olá';
  }

  async remove(id: number) {
    return `This action removes a #${id} cadidateProject`;
  }
}
