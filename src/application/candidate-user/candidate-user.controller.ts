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
  CreatesuccessResponse,
  ConflictExceptionError,
  ResponseFind,
  UnauthorizedExceptionError,
  NotFoundExceptionError,
  UpdateDTOSwagger,
  UpdateResponse,
} from './swagger/success.response';

@Controller('candidate-user')
@ApiTags('candidate_users')
export class CandidateUserController {
  constructor(private readonly candidateUserService: CandidateUserService) {}

  @Post()
  @ApiCreatedResponse({
    description: 'Endpoint responsável por criar novo usuário candidato.',
    type: CreatesuccessResponse,
  })
  @ApiConflictResponse({
    description: 'Username already exists',
    type: ConflictExceptionError,
  })
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
  @ApiResponse({
    status: 200,
    description:
      'Endpoint que retorna todos os usuários candidatos. Precisa estar autenticado com o token JWT',
    type: [ResponseFind],
  })
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
  @ApiResponse({
    status: 200,
    description:
      'Endpoint que retorna um usuário candidato conforme id informado. Precisa estar autenticado com o token JWT',
    type: ResponseFind,
  })
  @ApiNotFoundResponse({
    description: 'Erro quando não encontra o usuário no BD',
    type: NotFoundExceptionError,
  })
  @ApiUnauthorizedResponse({
    description: 'Unauthorized user',
    type: UnauthorizedExceptionError,
  })
  @ApiParam({
    name: 'id',
    required: true,
    description: 'Um número inteiro para o id do usuário candidato',
    schema: { oneOf: [{ type: 'integer' }] },
    example: 'candidate-users/1',
  })
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
  @ApiResponse({
    status: 200,
    description:
      'Endpoint usando para editar o perfil do usuário candidato. Precisa estar autenticado com o token JWT',
    type: UpdateResponse,
  })
  @ApiNotFoundResponse({
    description: 'Erro quando não encontra o usuário no BD',
    type: NotFoundExceptionError,
  })
  @ApiUnauthorizedResponse({
    description: 'Unauthorized user',
    type: UnauthorizedExceptionError,
  })
  @ApiParam({
    name: 'id',
    required: true,
    description: 'Um número inteiro para o id do usuário candidato',
    schema: { oneOf: [{ type: 'integer' }] },
    example: 'candidate-users/1',
  })
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
