// create a test unit for the method create of the CandidateUserService class using the jest framework
// Path: src/application/candidate-user/candidate-user.service.spec.ts
// Compare this snippet from src/application/candidate-user/candidate-user.service.ts:
// import { Injectable } from '@nestjs/common';
// import { NotFoundError } from '../../common/exceptions/not-found.error';
// import { CandidateUserSerialize } from '../../common/serializers/candidate-user.serialize';
// import { CreateCandidateUserDto } from './dto/create-candidate-user.dto';
// import { UpdateCandidateUserDto } from './dto/update-cadidate-user.dto';
// import { CandidateUserRepository } from './repositories/candidate-user.repository';
//
// @Injectable()
// export class CandidateUserService {
//   constructor(
//     private readonly candidateRepository: CandidateUserRepository,
//     private readonly candidateUserSerialize: CandidateUserSerialize,
//   ) {}
//
//   async create(createCandidate: CreateCandidateUserDto) {
//     const cadidateExists = await this.findByEmail(createCandidate.email);
//
//     if (cadidateExists && !createCandidate.provider) {
//       throw new Error('Candidate user already exists');
//     }
//
//     const newCandidate = await this.candidateRepository.create(createCandidate);
//     return this.candidateUserSerialize.dbToResponseCreate(newCandidate);
//   }
//
//   async findAll() {
//     const candidates = await this.candidateRepository.findAll();
//     console.log(candidates);
//
//     return candidates.map((candidate) =>
//       this.candidateUserSerialize.dbToResponse(candidate),
//     );
//   }
//
//   async findOne(id: number) {
//     const candidate = await this.candidateRepository.findById(id);
//     if (!candidate) {
//       throw new NotFoundError('Candidate not found');
//     }
//
//     return this.candidateUserSerialize.dbToResponse(candidate);
//   }
//
//   async findByEmail(email: string) {
//     return await this.candidateRepository.findByEmail(email);
//   }
//
//   async update(id: number, updateCandidateUserDto: UpdateCandidateUserDto) {
//     await this.findOne(id);
//
//     await this.candidateRepository.update(id, updateCandidateUserDto);
//   }
//
//   async findByIdAndToken(id: number, token: string) {
//     const candidate = await this.candidateRepository.findById(id);
//
//     if (!candidate) {
//       throw new Error('Candidate not found');
//     }
import { Test, TestingModule } from '@nestjs/testing';
import { CandidateUserSerialize } from '../../common/serializers/candidate-user.serialize';
import { CandidateUserService } from './candidate-user.service';
import { CreateCandidateUserDto } from './dto/create-candidate-user.dto';
import { CandidateUser } from './entities/candidate-user.entity';
import { CandidateUserRepository } from './repositories/candidate-user.repository';

import { CandidateUserInMemoryRepository } from '../../common/repositories/candidate-user/candidate-user-in-memory.repository';
import { PrismaModule } from '../../config/database/prisma/prisma.module';

describe('CadidateUserService', () => {
  let service: CandidateUserService;
  let repository: CandidateUserRepository;
  let serialize: CandidateUserSerialize;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [PrismaModule],
      providers: [
        CandidateUserService,
        {
          provide: CandidateUserRepository,
          useClass: CandidateUserInMemoryRepository,
        },
        CandidateUserSerialize,
      ],
    }).compile();

    service = module.get<CandidateUserService>(CandidateUserService);
    repository = module.get<CandidateUserRepository>(CandidateUserRepository);
    serialize = module.get<CandidateUserSerialize>(CandidateUserSerialize);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('create', () => {
    it('should create a new candidate user', async () => {
      const createCandidateUserDto: CreateCandidateUserDto = {
        email: 'email@test.com',
        name: 'test',
        password: '123456',
        confirmPassword: '123456',
      };

      const candidateUser = new CandidateUser();
      candidateUser.id = 4;
      candidateUser.email = createCandidateUserDto.email;
      candidateUser.name = createCandidateUserDto.name;
      candidateUser.roles = 'candidate';
      candidateUser.password = createCandidateUserDto.password;
      candidateUser.provider = createCandidateUserDto.provider;
      candidateUser.providerId = createCandidateUserDto.providerId;

      const returnDbResponse = serialize.dbToResponseCreate(candidateUser);

      jest
        .spyOn(repository, 'create')
        .mockImplementation(async () => candidateUser);

      jest
        .spyOn(serialize, 'dbToResponseCreate')
        .mockImplementation(() => returnDbResponse);

      const result = await service.create(createCandidateUserDto);

      expect(result).toStrictEqual({
        id: 4,
        name: 'test',
        roles: 'candidate',
        email: 'email@test.com',
      });

      expect(repository.create).toHaveBeenCalledTimes(1);

      expect(serialize.dbToResponseCreate).toHaveBeenCalledTimes(1);

      expect(repository.create).toHaveBeenCalledWith(createCandidateUserDto);

      expect(serialize.dbToResponseCreate).toHaveBeenCalledWith(candidateUser);
    });
  });
});
