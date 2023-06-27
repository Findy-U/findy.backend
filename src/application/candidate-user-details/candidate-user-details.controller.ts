import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  ConflictException,
  UseGuards,
  NotFoundException,
  Req,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiBody,
  ApiConflictResponse,
  ApiCreatedResponse,
  ApiExcludeEndpoint,
  ApiNotFoundResponse,
  ApiParam,
  ApiResponse,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { Request } from 'express';
import { JwtAuthGuard } from '../authentication/guards/jwt-auth.guard';
import {
  ApiCreatedDetailsResponseCreate,
  UnauthorizedExceptionError,
  ApiResponseDetailsFindAll,
  ResponseDetailsFind,
  ApiResponseDetailsFindById,
  ApiParamDetailsFindById,
  NotFoundExceptionError,
  ApiResponseDetailsUpdate,
  UpdateDetailsDTOSwagger,
  UpdateDetailsResponse,
} from '../candidate-user-details/swagger/swagger.responses';
import { CandidateUserDetailsService } from './candidate-user-details.service';
import { CreateCandidateUserDetailsDto } from './dto/create-candidate-user-details.dto';
import { UpdateCandidateUserDetailsDto } from './dto/update-candidate-user-details.dto';
import { ApiConflictResponseCreate } from '../candidate-user/swagger/success.response';

@Controller('candidate-users-details')
@ApiTags('candidate_users-details')
export class CandidateUserDetailsController {
  constructor(
    private readonly candidateUserDetailsService: CandidateUserDetailsService,
  ) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  @ApiCreatedResponse(ApiCreatedDetailsResponseCreate)
  @ApiConflictResponse(ApiConflictResponseCreate)
  @ApiBearerAuth()
  @ApiUnauthorizedResponse({
    description: 'Unauthorized user',
    type: UnauthorizedExceptionError,
  })
  async create(
    @Body() createCandidateUserDetailsDto: CreateCandidateUserDetailsDto,
    @Req() req: Request,
  ) {
    try {
      const userData = {
        ...createCandidateUserDetailsDto,
        candidateUserId: req.user.id,
      };
      return await this.candidateUserDetailsService.create(userData);
    } catch (error) {
      console.log(error);
      throw new ConflictException(error.message);
    }
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  @ApiExcludeEndpoint()
  @ApiBearerAuth()
  @ApiResponse({ ...ApiResponseDetailsFindAll, type: [ResponseDetailsFind] })
  @ApiUnauthorizedResponse({
    description: 'Unauthorized user',
    type: UnauthorizedExceptionError,
  })
  async findAll() {
    return this.candidateUserDetailsService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  @ApiExcludeEndpoint()
  @ApiBearerAuth()
  @ApiResponse({ ...ApiResponseDetailsFindById, type: ResponseDetailsFind })
  @ApiNotFoundResponse({
    description: 'Erro quando não encontra o registro no BD',
    type: NotFoundExceptionError,
  })
  @ApiUnauthorizedResponse({
    description: 'Unauthorized user',
    type: UnauthorizedExceptionError,
  })
  @ApiParam(ApiParamDetailsFindById)
  async findOne(@Param('id') id: string) {
    try {
      return await this.candidateUserDetailsService.findOne(+id);
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  @ApiExcludeEndpoint()
  @ApiBearerAuth()
  @ApiResponse({ ...ApiResponseDetailsUpdate, type: UpdateDetailsResponse })
  @ApiNotFoundResponse({
    description: 'Usuário não encontrado',
    type: NotFoundExceptionError,
  })
  @ApiUnauthorizedResponse({
    description: 'Unauthorized user',
    type: UnauthorizedExceptionError,
  })
  @ApiParam(ApiParamDetailsFindById)
  @ApiBody({
    type: UpdateDetailsDTOSwagger,
    description:
      'O body do update pode receber todos os atributos ou parte dos atributos.',
  })
  async update(
    @Param('id') id: string,
    @Body() updateCandidateUserDetailsDto: UpdateCandidateUserDetailsDto,
  ) {
    try {
      return this.candidateUserDetailsService.update(
        +id,
        updateCandidateUserDetailsDto,
      );
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }
}
