import {
  Body,
  ConflictException,
  Controller,
  Get,
  NotFoundException,
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
  async findOne(@Param('id') id: string) {
    try {
      return await this.candidateUserService.findOne(+id);
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateCandidateUserDto: UpdateCandidateUserDto,
  ) {
    return await this.candidateUserService.update(+id, updateCandidateUserDto);
  }
}
