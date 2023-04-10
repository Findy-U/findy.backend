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
} from '@nestjs/common';
import { InternalServerErrorException } from '@nestjs/common';
import {
  ApiBearerAuth,
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
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import {
  ApiProfileCreatedResponseCreate,
  ApiProfileParamFindById,
  ApiProfileResponseFindAll,
  NotFoundExceptionError,
  UnauthorizedExceptionError,
} from './swagger/success.response';
import { ProfileResponseFind } from './swagger/success.response';

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
  async create(@Body() createCandidateProfileDto: CreateCandidateProfileDto) {
    try {
      return await this.candidateProfileService.create(
        createCandidateProfileDto,
      );
    } catch (error) {
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
    type: NotFoundExceptionError,
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
