import { Test, TestingModule } from '@nestjs/testing';
import { CandidateUserInMemoryRepository } from '../../common/repositories/candidate-user/candidate-user-in-memory.repository';
import { CandidateUserSerialize } from '../../common/serializers/candidate-user.serialize';
import { PrismaModule } from '../../config/database/prisma/prisma.module';
import { CandidateUserService } from './candidate-user.service';
import { CreateCandidateUserDto } from './dto/create-candidate-user.dto';
import { CandidateUserRepository } from './repositories/candidate-user.repository';
describe('CadidateUserService', () => {
  const responseAllCandidateUser = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john-doe@test.com',
      roles: 'project',
      provider: null,
      providerId: null,
      createdAt: undefined,
      updatedAt: undefined,
      profile: {
        id: undefined,
        description: undefined,
        urlGithub: undefined,
        urlLinkedin: undefined,
        phone: undefined,
        availableTime: undefined,
        areaOfInterest: undefined,
      },
    },
    {
      id: 2,
      name: 'Emerson Moreira',
      email: 'eemr033@gmail.com',
      roles: 'candidate',
      provider: 'google',
      providerId: '109937089733594757055',
      createdAt: undefined,
      updatedAt: undefined,
      profile: {
        id: undefined,
        description: undefined,
        urlGithub: undefined,
        urlLinkedin: undefined,
        phone: undefined,
        availableTime: undefined,
        areaOfInterest: undefined,
      },
    },
    {
      id: 3,
      name: 'Emerson Moreira',
      email: 'eemr3@yahoo.com.br',
      roles: 'candidate',
      provider: 'findy',
      providerId: null,
      createdAt: undefined,
      updatedAt: undefined,
      profile: {
        id: undefined,
        description: undefined,
        urlGithub: undefined,
        urlLinkedin: undefined,
        phone: undefined,
        availableTime: undefined,
        areaOfInterest: undefined,
      },
    },
  ];
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
    it('should create a new candidate', async () => {
      const createCandidateDto: CreateCandidateUserDto = {
        email: 'test@test',
        name: 'test',
        password: '123456',
        confirmPassword: '123456',
      };

      const candidate = await service.create({
        ...createCandidateDto,
        roles: 'candidate',
        provider: 'findy',
      });

      const result = serialize.dbToResponseCreate(candidate);
      expect(result).toBeDefined();
      expect(result).toHaveProperty('id');
      expect(result).toHaveProperty('email');
      expect(result).toHaveProperty('name');
      expect(result).toHaveProperty('roles');
      expect(result).toStrictEqual({
        id: 4,
        email: 'test@test',
        name: 'test',
        roles: 'candidate',
      });
    });
  });
  describe('findAll', () => {
    it('should return an array of candidates', async () => {
      const candidates = await service.findAll();

      expect(candidates).toBeDefined();
      expect(candidates).toBeInstanceOf(Array);
      expect(candidates).toStrictEqual(responseAllCandidateUser);
    });
  });
  describe('findOne', () => {
    it('should return a candidate by id', async () => {
      const candidate = await service.findOne(1);

      expect(candidate).toBeDefined();
      expect(candidate).toStrictEqual(responseAllCandidateUser[0]);
    });
    it('should throw an error if candidate not found', async () => {
      try {
        await service.findOne(100);
      } catch (error) {
        expect(error.message).toBe('Candidate not found');
      }
    });
  });
  describe('findByEmail', () => {
    it('should return a candidate by email', async () => {
      const candidate = await service.findByEmail('eemr3@yahoo.com.br');

      expect(candidate).toBeDefined();
      expect(candidate).toStrictEqual({
        id: 3,
        name: 'Emerson Moreira',
        email: 'eemr3@yahoo.com.br',
        password: null,
        roles: 'candidate',
        provider: 'findy',
        providerId: null,
        recoverToken: 'any_recover_token',
      });
    });
    it('should throw an error if candidate not found', async () => {
      try {
        await service.findByEmail('test@test12');
      } catch (error) {
        expect(error.message).toBe('Candidate not found');
      }
    });
  });

  describe('findByIdAndToken', () => {
    it('should return true if exists recoverToken', async () => {
      const candidate = await service.findByIdAndToken(3, 'any_recover_token');

      expect(candidate).toBeDefined();
      expect(candidate).toBeTruthy();
    });

    it('should return false if not exists recoverToken', async () => {
      try {
        await service.findByIdAndToken(3, 'any_recover_token2');
      } catch (error) {
        expect(error.message).toBe('Recover token not found');
      }
    });
  });
});
