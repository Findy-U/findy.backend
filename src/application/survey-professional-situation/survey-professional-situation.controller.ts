import {
  Body,
  ConflictException,
  Controller,
  Get,
  Param,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from '../authentication/guards/jwt-auth.guard';
import { CreateSurveyProfessionalSituationDto } from './dto/create-survey-professional-situation.dto';
import { SurveyProfessionalSituationService } from './survey-professional-situation.service';
import { Request } from 'express';

@Controller('survey-professional-situation')
export class SurveyProfessionalSituationController {
  constructor(
    private readonly surveyProfessionalSituationService: SurveyProfessionalSituationService,
  ) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  async create(
    @Body()
    createSurveyProfessionalSituationDto: CreateSurveyProfessionalSituationDto,
    @Req() req: Request,
  ) {
    const { id } = req.user;

    try {
      return await this.surveyProfessionalSituationService.create({
        candidateUserId: id,
        ...createSurveyProfessionalSituationDto,
      });
    } catch (error) {
      throw new ConflictException(error.message);
    }
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  async findAll() {
    return await this.surveyProfessionalSituationService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  async findById(@Param('id') id: string) {
    return await this.surveyProfessionalSituationService.findById(+id);
  }
}
