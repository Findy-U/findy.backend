import { Injectable } from '@nestjs/common';
import { NotFoundError } from '../../common/exceptions/not-found.error';
import { CandidateUserSerialize } from '../../common/serializers/candidate-user.serialize';
import { CreateCandidateUserDto } from './dto/create-candidate-user.dto';
import { UpdateCandidateUserDto } from './dto/update-candidate-user.dto';
import { CandidateUserRepository } from './repositories/candidate-user.repository';
import { MailService } from 'src/mails/mail.service';
import { generateTemporaryToken } from 'src/common/helpers/generate-token';
import { BadRequestError } from '../../common/exceptions/bad-request.error';

@Injectable()
export class CandidateUserService {
  constructor(
    private readonly candidateRepository: CandidateUserRepository,
    private readonly candidateUserSerialize: CandidateUserSerialize,
    private readonly mailService: MailService,
  ) {}

  async create(createCandidate: CreateCandidateUserDto) {
    const cadidateExists = await this.findByEmail(createCandidate.email);
    const { token, expiredAt } = await generateTemporaryToken();

    if (cadidateExists && !createCandidate.provider) {
      throw new Error('Candidate user already exists');
    }

    const newCandidate = await this.candidateRepository.create(
      createCandidate,
      token,
      expiredAt,
    );

    await this.mailService.sendActivationEmail(newCandidate, token);
    return this.candidateUserSerialize.dbToResponseCreate(newCandidate);
  }

  async findAll() {
    const candidates = await this.candidateRepository.findAll();

    return candidates.map((candidate) =>
      this.candidateUserSerialize.dbToResponse(candidate),
    );
  }

  async findOne(id: number) {
    const candidate = await this.candidateRepository.findById(id);
    if (!candidate) {
      throw new NotFoundError('Candidate not found');
    }

    return this.candidateUserSerialize.dbToResponse(candidate);
  }

  async findByEmail(email: string) {
    return await this.candidateRepository.findByEmail(email);
  }

  async update(id: number, updateCandidateUserDto: UpdateCandidateUserDto) {
    await this.findOne(id);

    await this.candidateRepository.update(id, updateCandidateUserDto);
  }

  async findByIdAndToken(id: number, token: string) {
    const candidate = await this.candidateRepository.findById(id);

    if (!candidate) {
      throw new Error('Candidate not found');
    }

    if (
      token !== candidate.recoverToken ||
      candidate.recoverTokenExpiresAt < new Date()
    ) {
      await this.candidateRepository.update(id, {
        recoverToken: null,
        recoverTokenExpiresAt: null,
      });
      throw new Error('Recovery token not found or recovery token is expired');
    }

    return candidate;
  }

  async confirmationEmail(id: number, token: string) {
    const candidate = await this.candidateRepository.findById(id);
    const now = new Date();
    if (
      candidate.confirmationToken !== token ||
      candidate.expiredConfirmationToken < now
    ) {
      throw new BadRequestError('Invalid token! Please request a new token');
    }

    candidate.activated = true;
    candidate.confirmationToken = null;
    candidate.expiredConfirmationToken = null;

    await this.candidateRepository.update(candidate.id, candidate);
    return candidate;
  }
}
