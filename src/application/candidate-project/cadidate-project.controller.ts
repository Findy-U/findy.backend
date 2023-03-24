import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ConflictException,
  NotFoundException,
} from '@nestjs/common';
import { CandidateProjectService } from './candidate-project.service';
import { CreateCandidateProjectDto } from './dto/create-candidate-project.dto';
import { UpdateCandidateProjectDto } from './dto/update-candidate-project.dto';

@Controller('candidate-projects')
export class CandidateProjectController {
  constructor(
    private readonly candidateProjectService: CandidateProjectService,
  ) {}

  @Post()
  async create(@Body() createProjectDto: CreateCandidateProjectDto) {
    try {
      return await this.candidateProjectService.create(createProjectDto);
    } catch (error) {
      throw new ConflictException(error.message);
    }
  }

  @Get()
  findAll() {
    return this.candidateProjectService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.candidateProjectService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCandidateProjectDto: UpdateCandidateProjectDto,
  ) {
    return this.candidateProjectService.updateProjectData(
      +id,
      updateCandidateProjectDto,
    );
  }
  // @Patch(':id')
  // updateLanguageAndTools(
  //   @Param('id') id: string,
  //   @Body() updateCandidateProjectDto: UpdateCandidateProjectDto,
  // ) {
  //   return this.candidateProjectService.updateLanguageAndTools(
  //     +id,
  //     updateCandidateProjectDto,
  //   );
  // }
  @Patch('professional/:id')
  async updateProfessional(
    @Param('id') id: string,
    @Body() updateCandidateProjectDto: UpdateCandidateProjectDto,
  ) {
    try {
      return this.candidateProjectService.updateProfessional(
        +id,
        updateCandidateProjectDto,
      );
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.candidateProjectService.remove(+id);
  }
}
