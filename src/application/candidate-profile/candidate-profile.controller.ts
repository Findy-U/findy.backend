import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  NotFoundException,
  UseGuards,
  ConflictException,
  Req,
} from '@nestjs/common';
import { InternalServerErrorException } from '@nestjs/common';
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
import { CandidateProfileService } from './candidate-profile.service';
import { CreateCandidateProfileDto } from './dto/create-candidate-profile.dto';
import { UpdateCandidateProfileDto } from './dto/update-candidate-profile.dto';
import { JwtAuthGuard } from '../authentication/guards/jwt-auth.guard';
import {
  ApiProfileCreatedResponseCreate,
  ApiProfileParamFindById,
  ApiProfileResponseFindAll,
  CandidateUserNotFoundExceptionError,
  ProfileNotFoundExceptionError,
  UnauthorizedExceptionError,
} from './swagger/success.response';
import { ProfileResponseFind } from './swagger/success.response';
import { NotFoundError } from '../../common/exceptions/not-found.error';
import { ConflictError } from '../../common/exceptions/conflict-error';
import { Request } from 'express';
import { ApiConflictResponseCreate } from '../candidate-user/swagger/success.response';

@Controller('candidate-profile')
@ApiTags('candidate_profile')
export class CandidateProfileController {
  constructor(
    private readonly candidateProfileService: CandidateProfileService,
  ) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  @ApiCreatedResponse(ApiProfileCreatedResponseCreate)
  @ApiUnauthorizedResponse({
    description: 'Unauthorized user',
    type: UnauthorizedExceptionError,
  })
  @ApiBearerAuth()
  @ApiConflictResponse(ApiConflictResponseCreate)
  @ApiNotFoundResponse({
    type: CandidateUserNotFoundExceptionError,
  })
  async create(
    @Body() createCandidateProfileDto: CreateCandidateProfileDto,
    @Req() req: Request,
  ) {
    const dataCreate = {
      ...createCandidateProfileDto,
      candidateUserId: req.user.id,
    };
    try {
      return await this.candidateProfileService.create(dataCreate);
    } catch (error) {
      if (error instanceof NotFoundError) {
        throw new NotFoundException(error.message);
      }
      if (error instanceof ConflictError) {
        throw new ConflictException(error.message);
      }

      if (error instanceof Error) {
        throw new ConflictException(error.message);
      }
      throw new InternalServerErrorException('Server error please try again');
    }
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  @ApiUnauthorizedResponse({
    description: 'Unauthorized user',
    type: UnauthorizedExceptionError,
  })
  @ApiResponse({ ...ApiProfileResponseFindAll, type: [ProfileResponseFind] })
  @ApiBearerAuth()
  async findAll() {
    return await this.candidateProfileService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  @ApiBearerAuth()
  @ApiResponse({ ...ApiProfileResponseFindAll, type: ProfileResponseFind })
  @ApiUnauthorizedResponse({
    description: 'Unauthorized user',
    type: UnauthorizedExceptionError,
  })
  @ApiNotFoundResponse({
    description: 'Erro quando não encontra o projeto no BD',
    type: ProfileNotFoundExceptionError,
  })
  @ApiParam(ApiProfileParamFindById)
  async findOne(@Param('id') id: string) {
    try {
      return await this.candidateProfileService.findOne(+id);
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  @ApiExcludeEndpoint()
  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCandidateProfileDto: UpdateCandidateProfileDto,
  ) {
    return this.candidateProfileService.update(+id, updateCandidateProfileDto);
  }

  @ApiExcludeEndpoint()
  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.candidateProfileService.remove(+id);
  }
}
