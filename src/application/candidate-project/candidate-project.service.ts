import { Injectable } from '@nestjs/common';
import { BadRequestError } from '../../common/exceptions/bad-request.error';
import { ConflictError } from '../../common/exceptions/conflict-error';
import { CreateCandidateProjectDto } from './dto/create-candidate-project.dto';
import { UpdateCandidateProjectDto } from './dto/update-candidate-project.dto';
import { CandidateProjectRepository } from './repositories/candidate-project.repository';

@Injectable()
export class CandidateProjectService {
  constructor(
    private readonly candidateProjectRepository: CandidateProjectRepository,
  ) {}

  async create(createProject: CreateCandidateProjectDto, user) {
    const projectExists = await this.candidateProjectRepository.findByName(
      createProject.name,
    );

    // if (projectExists) {
    //   throw new ConflictError('Project name already exists');
    // }
    return await this.candidateProjectRepository.create(createProject, user);
  }

  findAll() {
    return this.candidateProjectRepository.findAll();
  }

  findOne(id: number) {
    if (!id) {
      throw new BadRequestError('The ID was not informed, please inform!');
    }
    return this.candidateProjectRepository.findById(id);
  }

  async findRolesProject(id: number) {
    return this.candidateProjectRepository.findRolesProject(id);
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
    return this.candidateProjectRepository.delete(id);
  }
}
