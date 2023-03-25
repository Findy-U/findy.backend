import {
  ArrayNotEmpty,
  isArray,
  IsNotEmpty,
  IsNumber,
  IsString,
} from 'class-validator';

export class CreateCandidateProjectDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  projectScope: string;

  @IsNotEmpty()
  @IsString()
  phone: string;

  @ArrayNotEmpty()
  @IsNumber({}, { each: true })
  language?: number[];

  @ArrayNotEmpty()
  @IsNumber({}, { each: true })
  professional?: number[];
}
