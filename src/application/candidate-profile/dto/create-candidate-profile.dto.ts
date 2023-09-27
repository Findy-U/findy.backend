import { ApiProperty } from '@nestjs/swagger';
import {
  ArrayNotEmpty,
  IsArray,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

enum SkillType {
  LANGUAGE,
  FRAMEWORK,
  DATABASE,
  DESIGNER_TOOL,
  CLOUD_SERVICE,
  DEVOPS_TOOL,
  TESTING_TOOL,
}
export class CreateCandidateProfileDto {
  @ApiProperty({
    description: 'Campo é obrigatório',
    example: 'Texto da descrição do perfil do usuário',
  })
  @IsNotEmpty({ message: 'Este campo é obrigatório.' })
  @IsString({ message: 'Este campo recebe somente String' })
  description: string;

  @ApiProperty({ description: 'Campo é obrigatório', example: '61998673265' })
  @IsString({ message: 'Este campo recebe somente String' })
  phone: string;

  @ApiProperty({
    description: 'Campo não é obrigatório',
    example: 'https://www.github.com/eemr3',
  })
  @IsOptional()
  @IsString({ message: 'Este campo recebe somente String' })
  urlGithub: string;

  @ApiProperty({
    description: 'Campo é obrigatório',
    example: 'https://www.linkedin.com/in/emerson-moreira',
  })
  @IsNotEmpty({ message: 'Este campo é obrigatório.' })
  @IsString({ message: 'Este campo recebe somente String' })
  urlLinkedin: string;

  @ApiProperty({
    description: 'Campo é obrigatório',
    example: [{ type: 'language', name: 'javascript' }],
  })
  @ArrayNotEmpty({ message: 'Este campo é obrigatório.' })
  // @IsNumber({}, { each: true })
  profileSkills?: [{ type: SkillType; name: string }];

  @ApiProperty({
    description: 'Campo é obrigatório',
    example: ['Front-End', 'UX', 'UI'],
  })
  @ArrayNotEmpty({ message: 'Este campo é obrigatório.' })
  @IsArray()
  @IsString({ each: true })
  occupationArea?: string[];

  @ApiProperty({
    description: 'Campo não é obrigatório',
    example: ['Tech Lead'],
  })
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  others?: string[];

  @ApiProperty({
    description: 'Campo é obrigatório',
    example: 'Qeuro atuar como desenvolvedor Front-end e Tech lead no projeto',
  })
  @IsNotEmpty({ message: 'Este campo é obrigatório.' })
  @IsString()
  areaOfInterest: string;

  @ApiProperty({
    example: 'Tenho 2 horas por dia, nose dias segunda, terça e sexta',
  })
  @IsNotEmpty({ message: 'Este campo é obrigatório.' })
  @IsString()
  availableTime: string;

  candidateUserId?: number;
}
