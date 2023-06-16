import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateSurveyProfessionalSituationDto {
  @IsNotEmpty({ message: 'Campo é obrigatório' })
  @IsString()
  situation: string;

  @IsOptional()
  @IsString()
  ocupationArea?: string;

  @IsOptional()
  @IsString()
  objectives?: string;

  candidateUserId?: number;
}
