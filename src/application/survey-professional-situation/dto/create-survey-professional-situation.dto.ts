import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateSurveyProfessionalSituationDto {
  @ApiProperty({
    description:
      'Campo para receber a informçaão "Qual sua situação profissão atual?"',
    example: 'Estudante ou estagiário na área de tecnologia',
  })
  @IsNotEmpty({ message: 'Campo é obrigatório' })
  @IsString()
  situation: string;

  @ApiProperty({
    description:
      'Campo para receber a informçaão "Qual é sua área de atuação mais recente? (Se aplicável)". Campo não é obrigatório',
    example: 'Engenharia de Software',
  })
  @IsOptional()
  @IsString()
  ocupationArea?: string;

  @ApiProperty({
    description:
      'Campo para receber a informçaão "Qual é o seu objetivo ao participar do projeto da Findy? (Se aplicável)". Campo não é obrigatório',
    example: 'Consolidar os conhecimentos dentro da minha área',
  })
  @IsOptional()
  @IsString()
  objectives?: string;

  candidateUserId?: number;
}
