import { Injectable } from '@nestjs/common';
import { CreateSurveyFeelingsDto } from './dto/create-survey-feelings.dto';
import { UpdateSurveyFeelingsDto } from './dto/update-survey-feelings.dto';

@Injectable()
export class SurveyFeelingsService {
  create(createSurveyFeelingsDto: CreateSurveyFeelingsDto) {
    return 'This action adds a new feeling';
  }

  findAll() {
    return `This action returns all feelings`;
  }

  findOne(id: number) {
    return `This action returns a #${id} feeling`;
  }

  update(id: number, updateSurveyFeelingsDto: UpdateSurveyFeelingsDto) {
    return `This action updates a #${id} feeling`;
  }

  remove(id: number) {
    return `This action removes a #${id} feeling`;
  }
}
