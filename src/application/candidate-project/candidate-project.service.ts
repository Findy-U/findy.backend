import { Injectable } from '@nestjs/common';
import { BadRequestError } from '../../common/exceptions/bad-request.error';
import { ConflictError } from '../../common/exceptions/conflict-error';
import { CreateCandidateProjectDto } from './dto/create-candidate-project.dto';
import { UpdateCandidateProjectDto } from './dto/update-candidate-project.dto';
import { CandidateProjectRepository } from './repositories/candidate-project.repository';
import { CandidateUser } from '../../common/interfaces/candidate-projects/candidate-project';

@Injectable()
export class CandidateProjectService {
  constructor(
    private readonly candidateProjectRepository: CandidateProjectRepository,
  ) {}

  async create(createProject: CreateCandidateProjectDto, user: CandidateUser) {
    const projectExists = await this.candidateProjectRepository.findByName(
      createProject.projectName,
    );

    if (projectExists) {
      throw new ConflictError('Project name already exists');
    }
    return await this.candidateProjectRepository.create(createProject, user);
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
    if (!id) {
      throw new BadRequestError('The ID was not informed, please inform!');
    }
    await this.candidateProjectRepository.update(id, updateProjectDto);
  }

  async remove(id: number) {
    if (!id) {
      throw new BadRequestError('The ID was not informed, please inform!');
    }
    return this.candidateProjectRepository.remove(id);
  }
}
