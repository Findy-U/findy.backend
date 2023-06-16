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
import { SurveyFeelingsService } from './survey-feelings.service';
import { CreateSurveyFeelingsDto } from './dto/create-survey-feelings.dto';
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

@Controller('survey-feelings')
@ApiTags('survey-feelings')
export class SurveyFeelingsController {
  constructor(private readonly surveyFeelingsService: SurveyFeelingsService) {}

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
    @Body() createSurveyFeelingsDto: CreateSurveyFeelingsDto,
    @Req() req: Request,
  ) {
    try {
      const userAnswers = {
        ...createSurveyFeelingsDto,
        candidateUserId: req.user.id,
      };
      return await this.surveyFeelingsService.create(userAnswers);
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
    return await this.surveyFeelingsService.findAll();
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
      return await this.surveyFeelingsService.findById(+id);
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }
}
