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
  ApiConflictResponse,
  ApiCreatedResponse,
  ApiExcludeEndpoint,
  ApiParam,
  ApiResponse,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { Request } from 'express';
import { HasRoles } from '../../common/decorators/has-roles.decorator';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { RolesGuard } from '../../common/guards/roles.guard';
import { Role } from '../../models/roles.enum';
import { CandidateProjectService } from './candidate-project.service';
import { CreateCandidateProjectDto } from './dto/create-candidate-project.dto';
import { UpdateCandidateProjectDto } from './dto/update-candidate-project.dto';
import {
  ApiConflictResponseCreate,
  ApiCreatedResponseCreate,
  ApiResponseFindById,
  ApirParamFindById,
  ProjectResponseFind,
  UnauthorizedExceptionError,
} from './swagger/success.response';
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
  @ApiBearerAuth()
  findAll() {
    return this.candidateProjectService.findAll();
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
  @ApiParam(ApirParamFindById)
  findOne(@Param('id') id: string) {
    try {
      return this.candidateProjectService.findOne(+id);
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  @ApiExcludeEndpoint()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @HasRoles(Role.Admin, Role.Project)
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCandidateProjectDto: UpdateCandidateProjectDto,
  ) {
    return this.candidateProjectService.updateProjectData(
      +id,
      updateCandidateProjectDto,
    );
  }

  @ApiExcludeEndpoint()
  @Patch('professional/:id')
  async updateProfessional(
    @Param('id') id: string,
    @Body() updateCandidateProjectDto: UpdateCandidateProjectDto,
  ) {
    try {
      return this.candidateProjectService.updateProfessional(
        +id,
        updateCandidateProjectDto,
      );
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  @ApiExcludeEndpoint()
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.candidateProjectService.remove(+id);
  }
}
