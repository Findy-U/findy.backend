import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { InternalServerErrorException } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { NotFoundError } from 'src/common/exceptions/not-found.error';
import { CandidateProfileService } from './candidate-profile.service';
import { CreateCandidateProfileDto } from './dto/create-candidate-profile.dto';
import { UpdateCandidateProfileDto } from './dto/update-candidate-profile.dto';

@Controller('candidate-profile')
@ApiTags('candidate_profile')
export class CandidateProfileController {
  constructor(
    private readonly candidateProfileService: CandidateProfileService,
  ) {}

  @Post()
  async create(@Body() createCandidateProfileDto: CreateCandidateProfileDto) {
    try {
      return await this.candidateProfileService.create(
        createCandidateProfileDto,
      );
    } catch (error) {
      throw new InternalServerErrorException('Server error please try again');
    }
  }

  @Get()
  async findAll() {
    return await this.candidateProfileService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    try {
      return await this.candidateProfileService.findOne(+id);
    } catch (error) {
      throw new NotFoundError();
    }
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCandidateProfileDto: UpdateCandidateProfileDto,
  ) {
    return this.candidateProfileService.update(+id, updateCandidateProfileDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.candidateProfileService.remove(+id);
  }
}
