import {
  BadRequestException,
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
import { HasRoles } from '../../common/decorators/has-roles.decorator';
import { NotFoundError } from '../../common/exceptions/not-found.error';
import { JwtAuthGuard } from '../authentication/guards/jwt-auth.guard';
import { RolesGuard } from '../authentication/guards/roles.guard';
import { CandidateProjectService } from './candidate-project.service';
import { CreateCandidateProjectDto } from './dto/create-candidate-project.dto';
import { UpdateCandidateProjectDto } from './dto/update-candidate-project.dto';
import {
  ApiConflictResponseCreate,
  ApiCreatedResponseCreate,
  ApiResponseDelete,
  ApiResponseFindAll,
  ApiResponseFindById,
  ApiResponseRoleById,
  ApiResponseRoles,
  ApiResponseStackById,
  ApiResponseStacks,
  ApiResponseUpdate,
  ApirParamFindById,
  ApirParamRoleFindById,
  ApirParamStackFindById,
  NotFoundExceptionError,
  NotFoundExceptionErrorRoles,
  NotFoundExceptionErrorStacks,
  ProjectResponseDelete,
  ProjectResponseFind,
  RolesResponse,
  StackResponse,
  UnauthorizedExceptionError,
  UpdateDTOSwagger,
  UpdateResponse,
} from './swagger/success.response';
import { Role } from '../../common/interfaces/authentication/roles.enum';
@Controller('candidate-projects')
@ApiTags('candidate_projects')
export class CandidateProjectController {
  constructor(
    private readonly candidateProjectService: CandidateProjectService,
  ) {}

  @HasRoles(Role.Candidate, Role.Project)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Post()
  @ApiCreatedResponse(ApiCreatedResponseCreate)
  @ApiConflictResponse(ApiConflictResponseCreate)
  @ApiUnauthorizedResponse({
    description: 'Unauthorized user',
    type: UnauthorizedExceptionError,
  })
  @ApiBearerAuth()
  async create(
    @Req() req: Request,
    @Body() createProjectDto: CreateCandidateProjectDto,
  ) {
    try {
      const user = req.user;

      return await this.candidateProjectService.create(createProjectDto, user);
    } catch (error) {
      if (error.message.includes('Internal')) {
        throw new InternalServerErrorException(error.message);
      }
      throw new ConflictException(error.message);
    }
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  @ApiUnauthorizedResponse({
    description: 'Unauthorized user',
    type: UnauthorizedExceptionError,
  })
  @ApiResponse({ ...ApiResponseFindAll, type: [ProjectResponseFind] })
  @ApiBearerAuth()
  async findAll() {
    return await this.candidateProjectService.findAll();
  }

  // @HasRoles(Role.Admin, Role.Project)
  @UseGuards(JwtAuthGuard)
  @Get('roles')
  @ApiBearerAuth()
  @ApiResponse({ ...ApiResponseRoles, type: [RolesResponse] })
  @ApiUnauthorizedResponse({
    description: 'Unauthorized user',
    type: UnauthorizedExceptionError,
  })
  async findAllRolesProject() {
    return await this.candidateProjectService.findAllRolesProject();
  }

  // @HasRoles(Role.Admin, Role.Project)
  @UseGuards(JwtAuthGuard)
  @Get('skills')
  @ApiBearerAuth()
  @ApiResponse({ ...ApiResponseStacks, type: [StackResponse] })
  @ApiUnauthorizedResponse({
    description: 'Unauthorized user',
    type: UnauthorizedExceptionError,
  })
  async findAllSkillsProject() {
    return await this.candidateProjectService.findAllSkillsProject();
  }

  @UseGuards(JwtAuthGuard)
  // @HasRoles(Role.Admin, Role.Project)
  @Get(':id')
  @ApiBearerAuth()
  @ApiResponse({ ...ApiResponseFindById, type: ProjectResponseFind })
  @ApiUnauthorizedResponse({
    description: 'Unauthorized user',
    type: UnauthorizedExceptionError,
  })
  @ApiNotFoundResponse({
    description: 'Erro quando não encontra o projeto no BD',
    type: NotFoundExceptionError,
  })
  @ApiParam(ApirParamFindById)
  async findOne(@Param('id') id: string) {
    try {
      return await this.candidateProjectService.findOne(+id);
    } catch (error) {
      if (error instanceof NotFoundError) {
        throw new NotFoundException(error.message);
      }
      throw new BadRequestException(error.message);
    }
  }

  // @HasRoles(Role.Admin, Role.Project)
  @UseGuards(JwtAuthGuard)
  @Get('roles/:id')
  @ApiBearerAuth()
  @ApiResponse({ ...ApiResponseRoleById, type: RolesResponse })
  @ApiUnauthorizedResponse({
    description: 'Unauthorized user',
    type: UnauthorizedExceptionError,
  })
  @ApiNotFoundResponse({
    description: 'Erro quando não encontra o projeto no BD',
    type: NotFoundExceptionErrorRoles,
  })
  @ApiParam(ApirParamRoleFindById)
  async findRolesProject(@Param('id') id: string) {
    try {
      return await this.candidateProjectService.findByIdRoleProject(+id);
    } catch (error) {
      if (error instanceof NotFoundError) {
        throw new NotFoundException(error.message);
      }
      throw new BadRequestException(error.message);
    }
  }

  // @HasRoles(Role.Admin, Role.Project)
  @UseGuards(JwtAuthGuard)
  @Get('skills/:id')
  @ApiBearerAuth()
  @ApiResponse({ ...ApiResponseStackById, type: StackResponse })
  @ApiUnauthorizedResponse({
    description: 'Unauthorized user',
    type: UnauthorizedExceptionError,
  })
  @ApiNotFoundResponse({
    description: 'Erro quando não encontra o projeto no BD',
    type: NotFoundExceptionErrorStacks,
  })
  @ApiParam(ApirParamStackFindById)
  async findByIdSkillProject(@Param('id') id: string) {
    try {
      return await this.candidateProjectService.findByIdSkillProject(+id);
    } catch (error) {
      if (error instanceof NotFoundError) {
        throw new NotFoundException(error.message);
      }
      throw new BadRequestException(error.message);
    }
  }

  @ApiExcludeEndpoint()
  @UseGuards(JwtAuthGuard)
  // @HasRoles(Role.Admin, Role.Project)
  @Patch(':id')
  @ApiBearerAuth()
  @ApiUnauthorizedResponse({
    description: 'Unauthorized user',
    type: UnauthorizedExceptionError,
  })
  @ApiNotFoundResponse({
    description: 'Erro quando não encontra o projeto no BD',
    type: NotFoundExceptionError,
  })
  @ApiBody({
    type: UpdateDTOSwagger,
    description:
      'O body do update pode receber todos os atributos ou parte dos atributos.',
  })
  @ApiParam(ApirParamFindById)
  @ApiResponse({ ...ApiResponseUpdate, type: UpdateResponse })
  async update(
    @Param('id') id: string,
    @Body() updateCandidateProjectDto: UpdateCandidateProjectDto,
  ) {
    try {
      await this.candidateProjectService.updateProjectData(
        +id,
        updateCandidateProjectDto,
      );
      return { message: 'Update successfully' };
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  @ApiExcludeEndpoint()
  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  @ApiBearerAuth()
  @ApiParam(ApirParamFindById)
  @ApiUnauthorizedResponse({
    description: 'Unauthorized user',
    type: UnauthorizedExceptionError,
  })
  @ApiNotFoundResponse({
    description: 'Erro quando não encontra o projeto no BD',
    type: NotFoundExceptionError,
  })
  @ApiResponse({ ...ApiResponseDelete, type: ProjectResponseDelete })
  async remove(@Param('id') id: string) {
    try {
      return await this.candidateProjectService.remove(+id);
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }
}
