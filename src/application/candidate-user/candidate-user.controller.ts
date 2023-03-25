import {
  Body,
  ConflictException,
  Controller,
  Get,
  NotFoundException,
  Param,
  Patch,
  Post,
  UseGuards,
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
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CandidateUserService } from './candidate-user.service';
import { CreateCandidateUserDto } from './dto/create-cadidate-user.dto';
import { UpdateCandidateUserDto } from './dto/update-cadidate-user.dto';
import {
  ApiConflictResponseCreate,
  ApiCreatedResponseCreate,
  ApiResponseFindAll,
  ApiResponseFindById,
  ApiResponseUpdate,
  ApirParamFindById,
  NotFoundExceptionError,
  ResponseFind,
  UnauthorizedExceptionError,
  UpdateDTOSwagger,
  UpdateResponse,
} from './swagger/success.response';

@Controller('candidate-users')
@ApiTags('candidate_users')
export class CandidateUserController {
  constructor(private readonly candidateUserService: CandidateUserService) {}

  @Post()
  @ApiCreatedResponse(ApiCreatedResponseCreate)
  @ApiConflictResponse(ApiConflictResponseCreate)
  async create(@Body() createCandidateUserDto: CreateCandidateUserDto) {
    try {
      return await this.candidateUserService.create(createCandidateUserDto);
    } catch (error) {
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
    return await this.candidateUserService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  @ApiBearerAuth()
  @ApiResponse({ ...ApiResponseFindById, type: ResponseFind })
  @ApiNotFoundResponse({
    description: 'Erro quando não encontra o usuário no BD',
    type: NotFoundExceptionError,
  })
  @ApiUnauthorizedResponse({
    description: 'Unauthorized user',
    type: UnauthorizedExceptionError,
  })
  @ApiParam(ApirParamFindById)
  async findOne(@Param('id') id: string) {
    try {
      return await this.candidateUserService.findOne(+id);
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  @ApiBearerAuth()
  @ApiResponse({ ...ApiResponseUpdate, type: UpdateResponse })
  @ApiNotFoundResponse({
    description: 'Erro quando não encontra o usuário no BD',
    type: NotFoundExceptionError,
  })
  @ApiUnauthorizedResponse({
    description: 'Unauthorized user',
    type: UnauthorizedExceptionError,
  })
  @ApiParam(ApirParamFindById)
  @ApiBody({
    type: UpdateDTOSwagger,
    description:
      'O body do update pode receber todos os atributos ou parte dos atributos.',
  })
  async update(
    @Param('id') id: string,
    @Body() updateCandidateUserDto: UpdateCandidateUserDto,
  ) {
    await this.candidateUserService.update(+id, updateCandidateUserDto);
    return { message: 'Uupdate successfully' };
  }
}
