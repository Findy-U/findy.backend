import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CandidateProfileService } from './candidate-profile.service';
import { CreateCandidateProfileDto } from './dto/create-candidate-profile.dto';
import { UpdateCandidateProfileDto } from './dto/update-candidate-profile.dto';

@Controller('candidate-profile')
export class CandidateProfileController {
  constructor(private readonly candidateProfileService: CandidateProfileService) {}

  @Post()
  create(@Body() createCandidateProfileDto: CreateCandidateProfileDto) {
    return this.candidateProfileService.create(createCandidateProfileDto);
  }

  @Get()
  findAll() {
    return this.candidateProfileService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.candidateProfileService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCandidateProfileDto: UpdateCandidateProfileDto) {
    return this.candidateProfileService.update(+id, updateCandidateProfileDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.candidateProfileService.remove(+id);
  }
}
