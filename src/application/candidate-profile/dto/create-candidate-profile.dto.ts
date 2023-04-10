import { ApiProperty } from '@nestjs/swagger';
import {
  ArrayNotEmpty,
  IsArray,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateCandidateProfileDto {
  @ApiProperty({ example: 'Texto da descrição do perfil do usuário' })
  @IsNotEmpty()
  @IsString()
  description: string;

  @ApiProperty({ example: '61998673265' })
  @IsString()
  phone: string;

  @ApiProperty({ example: 'https://www.github.com/eemr3' })
  @IsString()
  urlGithub: string;

  @ApiProperty({ example: 'https://www.linkedin.com/in/emerson-moreira' })
  @IsString()
  urlLinkedin: string;

  @ApiProperty({ example: [8, 9, 11, 19, 20, 23, 26, 27] })
  @ArrayNotEmpty()
  @IsNumber({}, { each: true })
  profileSkills?: number[];

  @ApiProperty({ example: ['Front-End', 'UX', 'UI'] })
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
    example: 'Qeuro atuar como desenvolvedor Front-end e Tech lead no projeto',
  })
  @IsNotEmpty()
  @IsString()
  areaOfInterest: string;

  @ApiProperty({
    example: 'Tenho 2 horas por dia, nose dias segunda, terça e sexta',
  })
  @IsNotEmpty()
  @IsString()
  availableTime: string;

  @ApiProperty({ example: 2 })
  @IsNumber()
  candidateUserId?: number | null;

  candidateUser?: any;
}
