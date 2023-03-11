import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { EmailConfirmationService } from 'src/mails/email-confirmation/email-confirmation.service';
import { CandidateUserService } from './candidate-user.service';
import { CreateCandidateUserDto } from './dto/create-candidate-user.dto';
import { UpdateCandidateUserDto } from './dto/update-candidate-user.dto';

@Controller('candidate-user')
export class CandidateUserController {
  constructor(private readonly candidateUserService: CandidateUserService, private emailConfirmationService: EmailConfirmationService) { }

  @Post()
  create() {
    return this.candidateUserService.create();
  }

  @Get()
  findAll() {
    return this.candidateUserService.findAll();
  }

  @Get('confirm')
  confirmRegistration(@Query('token') token: string) {
    try {
      return this.emailConfirmationService.confirmRegistration(token);
    } catch (error) {
      console.log(error);
    }
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.candidateUserService.findOne(+id);
  }


  @Patch(':id')
  update(@Param('id') id: string) {
    return this.candidateUserService.update(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.candidateUserService.remove(+id);
  }

}
