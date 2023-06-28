import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  UseGuards,
  Req,
  ConflictException,
  NotFoundException,
} from '@nestjs/common';
import { Request } from 'express';
import { SurveyNeedsService } from './survey-needs.service';
import { CreateSurveyNeedsDto } from './dto/create-survey-needs.dto';
import {
  ApiBearerAuth,
  ApiConflictResponse,
  ApiCreatedResponse,
  ApiExcludeEndpoint,
  ApiNotFoundResponse,
  ApiParam,
  ApiResponse,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { JwtAuthGuard } from '../authentication/guards/jwt-auth.guard';
import {
  ApiConflictResponseCreate,
  ApiCreatedResponseCreate,
  ApiParamFindById,
  ApiResponseFindAll,
  ApiResponseFindById,
  NotFoundExceptionError,
  ResponseFind,
  UnauthorizedExceptionError,
} from './swagger/swagger.responses';

@Controller('survey-needs')
@ApiTags('survey-needs')
export class SurveyNeedsController {
  constructor(private readonly surveyNeedsService: SurveyNeedsService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  @ApiCreatedResponse(ApiCreatedResponseCreate)
  @ApiConflictResponse(ApiConflictResponseCreate)
  @ApiBearerAuth()
  @ApiUnauthorizedResponse({
    description: 'Unauthorized user',
    type: UnauthorizedExceptionError,
  })
  async create(
    @Body() createSurveyNeedsDto: CreateSurveyNeedsDto,
    @Req() req: Request,
  ) {
    try {
      const userAnswers = {
        ...createSurveyNeedsDto,
        candidateUserId: req.user.id,
      };
      return await this.surveyNeedsService.create(userAnswers);
    } catch (error) {
      console.log(error);
      throw new ConflictException(error.message);
    }
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  @ApiExcludeEndpoint()
  @ApiBearerAuth()
  @ApiResponse({ ...ApiResponseFindAll, type: [ResponseFind] })
  @ApiUnauthorizedResponse({
    description: 'Unauthorized user',
    type: UnauthorizedExceptionError,
  })
  async findAll() {
    return await this.surveyNeedsService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  @ApiExcludeEndpoint()
  @ApiBearerAuth()
  @ApiResponse({ ...ApiResponseFindById, type: ResponseFind })
  @ApiNotFoundResponse({
    description: 'Erro quando não encontra o registro no BD',
    type: NotFoundExceptionError,
  })
  @ApiUnauthorizedResponse({
    description: 'Unauthorized user',
    type: UnauthorizedExceptionError,
  })
  @ApiParam(ApiParamFindById)
  async findById(@Param('id') id: string) {
    try {
      return await this.surveyNeedsService.findById(+id);
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }
}
