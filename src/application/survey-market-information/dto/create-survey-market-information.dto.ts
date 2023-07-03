import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateSurveyMarketInformationDto {
  @ApiProperty({
    description:
      'Campo para receber a informçaão "Como você ficou sabendo sobre a Findy?"',
    example: 'Linkedin',
  })
  @IsNotEmpty({ message: 'Campo é obrigatório' })
  @IsString()
  metFindy: string;

  @IsOptional()
  @IsString()
  friendName?: string;

  @IsOptional()
  @IsString()
  friendEmail?: string;

  candidateUserId?: number;
}
