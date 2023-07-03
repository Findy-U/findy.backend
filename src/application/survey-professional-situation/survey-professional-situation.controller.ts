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
import {
  ApiBearerAuth,
  ApiConflictResponse,
  ApiCreatedResponse,
  ApiExcludeEndpoint,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import {
  ApiProfessionalSituationCreatedResponseCreate,
  UnauthorizedExceptionError,
} from './swagger/success.response';
import { ApiConflictResponseCreate } from '../candidate-user/swagger/success.response';

@ApiTags('survey-professional-situation')
@Controller('survey-professional-situation')
export class SurveyProfessionalSituationController {
  constructor(
    private readonly surveyProfessionalSituationService: SurveyProfessionalSituationService,
  ) {}

  @ApiCreatedResponse(ApiProfessionalSituationCreatedResponseCreate)
  @ApiUnauthorizedResponse({
    description: 'Unauthorized user',
    type: UnauthorizedExceptionError,
  })
  @ApiConflictResponse(ApiConflictResponseCreate)
  @ApiBearerAuth()
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

  @ApiExcludeEndpoint()
  @UseGuards(JwtAuthGuard)
  @Get()
  async findAll() {
    return await this.surveyProfessionalSituationService.findAll();
  }

  @ApiExcludeEndpoint()
  @UseGuards(JwtAuthGuard)
  @Get(':id')
  async findById(@Param('id') id: string) {
    return await this.surveyProfessionalSituationService.findById(+id);
  }
}
