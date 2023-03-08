import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ConflictException,
} from '@nestjs/common';
import { CandidateUserService } from './cadidate-user.service';
import { CreateCadidateUserDto } from './dto/create-cadidate-user.dto';
import { UpdateCadidateUserDto } from './dto/update-cadidate-user.dto';

@Controller('cadidate-user')
export class CadidateUserController {
  constructor(private readonly cadidateUserService: CandidateUserService) {}

  @Post()
  async create(@Body() createCadidateUserDto: CreateCadidateUserDto) {
    try {
      return await this.cadidateUserService.create(createCadidateUserDto);
    } catch (error) {
      throw new ConflictException(error.message);
    }
  }

  @Get()
  async findAll() {
    return await this.cadidateUserService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cadidateUserService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCadidateUserDto: UpdateCadidateUserDto,
  ) {
    return this.cadidateUserService.update(+id, updateCadidateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cadidateUserService.remove(+id);
  }
}
