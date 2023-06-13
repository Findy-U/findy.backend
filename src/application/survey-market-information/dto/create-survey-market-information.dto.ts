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

  @ApiProperty({
    description:
      'Campo para receber a informação se caso foi indicado por uma amigo. O mesmo não é obrigatório, somente em caso de ouver indicação!',
    example: 'Jonh Doe',
  })
  @IsOptional()
  @IsString()
  friendName?: string;

  @ApiProperty({
    description:
      'Campo para receber a informação se caso foi indicado por uma amigo. O mesmo não é obrigatório, somente em caso de ouver indicação!',
    example: 'jonhdoe@email.com',
  })
  @IsOptional()
  @IsString()
  friendEmail?: string;

  candidateUserId?: number;
}
