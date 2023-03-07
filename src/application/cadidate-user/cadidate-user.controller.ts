import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CadidateUserService } from './cadidate-user.service';
import { CreateCadidateUserDto } from './dto/create-cadidate-user.dto';
import { UpdateCadidateUserDto } from './dto/update-cadidate-user.dto';

@Controller('cadidate-user')
export class CadidateUserController {
  constructor(private readonly cadidateUserService: CadidateUserService) {}

  @Post()
  create(@Body() createCadidateUserDto: CreateCadidateUserDto) {
    return this.cadidateUserService.create(createCadidateUserDto);
  }

  @Get()
  findAll() {
    return this.cadidateUserService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cadidateUserService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCadidateUserDto: UpdateCadidateUserDto) {
    return this.cadidateUserService.update(+id, updateCadidateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cadidateUserService.remove(+id);
  }
}
