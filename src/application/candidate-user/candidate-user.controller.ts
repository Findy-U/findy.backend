import {
  Body,
  ConflictException,
  Controller,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CandidateUserService } from './candidate-user.service';
import { CreateCandidateUserDto } from './dto/create-cadidate-user.dto';
import { UpdateCandidateUserDto } from './dto/update-cadidate-user.dto';

@Controller('candidate-user')
export class CandidateUserController {
  constructor(private readonly candidateUserService: CandidateUserService) {}

  @Post()
  async create(@Body() createCandidateUserDto: CreateCandidateUserDto) {
    try {
      return await this.candidateUserService.create(createCandidateUserDto);
    } catch (error) {
      throw new ConflictException(error.message);
    }
  }

  @Get()
  async findAll() {
    return await this.candidateUserService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.candidateUserService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCandidateUserDto: UpdateCandidateUserDto,
  ) {
    return this.candidateUserService.update(+id, updateCandidateUserDto);
  }
}
