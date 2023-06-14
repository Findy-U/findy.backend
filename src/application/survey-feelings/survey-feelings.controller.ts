import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { SurveyFeelingsService } from './survey-feelings.service';
import { CreateSurveyFeelingsDto } from './dto/create-survey-feelings.dto';
import { UpdateSurveyFeelingsDto } from './dto/update-survey-feelings.dto';

@Controller('feelings')
export class SurveyFeelingsController {
  constructor(private readonly surveyFeelingsService: SurveyFeelingsService) {}

  @Post()
  create(@Body() createSurveyFeelingsDto: CreateSurveyFeelingsDto) {
    return this.surveyFeelingsService.create(createSurveyFeelingsDto);
  }

  @Get()
  findAll() {
    return this.surveyFeelingsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.surveyFeelingsService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateSurveyFeelingsDto: UpdateSurveyFeelingsDto,
  ) {
    return this.surveyFeelingsService.update(+id, updateSurveyFeelingsDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.surveyFeelingsService.remove(+id);
  }
}
