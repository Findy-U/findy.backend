import { PartialType } from '@nestjs/mapped-types';
import { CreateCadidateUserDto } from './create-cadidate-user.dto';

export class UpdateCadidateUserDto extends PartialType(CreateCadidateUserDto) {}
