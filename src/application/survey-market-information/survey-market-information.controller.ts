import {
  Body,
  ConflictException,
  Controller,
  Delete,
  Get,
  InternalServerErrorException,
  NotFoundException,
  Param,
  Patch,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import {
  ApiBearerAuth,
  ApiConflictResponse,
  ApiCreatedResponse,
  ApiExcludeEndpoint,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { Request } from 'express';
import { ConflictError } from '../../common/exceptions/conflict-error';
import { NotFoundError } from '../../common/exceptions/not-found.error';
import { CreateSurveyMarketInformationDto } from './dto/create-survey-market-information.dto';
import { UpdateSurveyMarketInformationDto } from './dto/update-survey-market-information.dto';
import { SurveyMarketInformationService } from './survey-market-information.service';
import {
  ApiMarketInformationConflictResponseCreate,
  ApiMarketInformationCreatedResponseCreate,
  UnauthorizedExceptionError,
} from './swagger/success.response';

@ApiTags('survey-market-information')
@Controller('survey-market-information')
export class SurveyMarketInformationController {
  constructor(
    private readonly surveyMarketInformationService: SurveyMarketInformationService,
  ) {}

  @ApiCreatedResponse(ApiMarketInformationCreatedResponseCreate)
  @ApiUnauthorizedResponse({
    description: 'Unauthorized user',
    type: UnauthorizedExceptionError,
  })
  @ApiBearerAuth()
  @ApiConflictResponse(ApiMarketInformationConflictResponseCreate)
  @UseGuards(AuthGuard('jwt'))
  @Post()
  async create(
    @Body() body: CreateSurveyMarketInformationDto,
    @Req() req: Request,
  ) {
    try {
      body.candidateUserId = req.user['id'];

      return await this.surveyMarketInformationService.create(body);
    } catch (error) {
      if (error instanceof ConflictError) {
        throw new ConflictException(error.message);
      }
      console.error(error);
      throw new InternalServerErrorException('Server error please try again');
    }
  }

  @ApiExcludeEndpoint()
  @Get()
  findAll() {
    return this.surveyMarketInformationService.findAll();
  }

  @ApiExcludeEndpoint()
  @Get(':id')
  findOne(@Param('id') id: string) {
    try {
      return this.surveyMarketInformationService.findOne(+id);
    } catch (error) {
      if (error instanceof NotFoundError) {
        throw new NotFoundException(error.message);
      }

      throw new InternalServerErrorException();
    }
  }

  @ApiExcludeEndpoint()
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateSurveyMarketInformationDto: UpdateSurveyMarketInformationDto,
  ) {
    return this.surveyMarketInformationService.update(
      +id,
      updateSurveyMarketInformationDto,
    );
  }

  @ApiExcludeEndpoint()
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.surveyMarketInformationService.remove(+id);
  }
}
