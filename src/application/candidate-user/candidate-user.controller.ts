import {
  BadRequestException,
  Body,
  ConflictException,
  Controller,
  Get,
  NotFoundException,
  Param,
  Patch,
  Post,
  Query,
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
import { JwtAuthGuard } from '../authentication/guards/jwt-auth.guard';
import { CandidateUserService } from './candidate-user.service';
import { CreateCandidateUserDto } from './dto/create-candidate-user.dto';
import { UpdateCandidateUserDto } from './dto/update-candidate-user.dto';
import {
  ApiConflictResponseCreate,
  ApiCreatedResponseCreate,
  ApiResponseEmailConfirmation,
  ApiResponseFindAll,
  ApiResponseFindById,
  ApiResponseUpdate,
  ApirParamFindById,
  ConfirmEmailResponse,
  NotFoundExceptionError,
  ResponseCandidateUserFind,
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
      console.log(error);
      throw new ConflictException(error.message);
    }
  }

  @UseGuards(JwtAuthGuard)
  // @HasRoles(Role.Project, Role.Admin)
  @Get()
  @ApiBearerAuth()
  @ApiResponse({ ...ApiResponseFindAll, type: [ResponseCandidateUserFind] })
  @ApiUnauthorizedResponse({
    description: 'Unauthorized user',
    type: UnauthorizedExceptionError,
  })
  // @ApiForbiddenResponse({
  //   description: 'Forbidden resource',
  //   type: ForbidenExceptiomError,
  // })
  async findAll() {
    return await this.candidateUserService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  // @HasRoles(Role.Candidate, Role.Project)
  // @UseGuards(JwtAuthGuard, RolesGuard)
  @Get(':id')
  @ApiBearerAuth()
  @ApiResponse({ ...ApiResponseFindById, type: ResponseCandidateUserFind })
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
    return { message: 'Update successfully' };
  }

  @Patch('email-confirmation/:id')
  @ApiResponse({ ...ApiResponseEmailConfirmation, type: ConfirmEmailResponse })
  @ApiParam(ApirParamFindById)
  async emailConfirmation(
    @Param('id') id: string,
    @Query('token') token: string,
  ) {
    try {
      await this.candidateUserService.confirmationEmail(+id, token);
      return { message: 'Email confirmed successfully!' };
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }
}
