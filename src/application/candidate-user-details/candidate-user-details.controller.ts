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
  ApiNotFoundResponse,
  ApiParam,
  ApiResponse,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { Request } from 'express';
import { JwtAuthGuard } from '../authentication/guards/jwt-auth.guard';
import {
  ApiConflictResponseCreate,
  ApiCreatedResponseCreate,
  UnauthorizedExceptionError,
  ApiResponseFindAll,
  ResponseFind,
  ApiResponseFindById,
  ApiParamFindById,
  NotFoundExceptionError,
  ApiResponseUpdate,
  UpdateDTOSwagger,
  UpdateResponse,
} from '../candidate-user-details/swagger/swagger.responses';
import { CandidateUserDetailsService } from './candidate-user-details.service';
import { CreateCandidateUserDetailsDto } from './dto/create-candidate-user-details.dto';
import { UpdateCandidateUserDetailsDto } from './dto/update-candidate-user-details.dto';

@Controller('candidate-users-details')
@ApiTags('candidate_users-details')
export class CandidateUserDetailsController {
  constructor(
    private readonly candidateUserDetailsService: CandidateUserDetailsService,
  ) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  @ApiCreatedResponse(ApiCreatedResponseCreate)
  @ApiConflictResponse(ApiConflictResponseCreate)
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
  @ApiBearerAuth()
  @ApiResponse({ ...ApiResponseFindAll, type: [ResponseFind] })
  @ApiUnauthorizedResponse({
    description: 'Unauthorized user',
    type: UnauthorizedExceptionError,
  })
  async findAll() {
    return this.candidateUserDetailsService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
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
  async findOne(@Param('id') id: string) {
    try {
      return await this.candidateUserDetailsService.findOne(+id);
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  @ApiBearerAuth()
  @ApiResponse({ ...ApiResponseUpdate, type: UpdateResponse })
  @ApiNotFoundResponse({
    description: 'Usuário não encontrado',
    type: NotFoundExceptionError,
  })
  @ApiUnauthorizedResponse({
    description: 'Unauthorized user',
    type: UnauthorizedExceptionError,
  })
  @ApiParam(ApiParamFindById)
  @ApiBody({
    type: UpdateDTOSwagger,
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
