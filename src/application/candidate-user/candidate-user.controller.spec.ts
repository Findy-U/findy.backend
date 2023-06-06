// import { Test, TestingModule } from '@nestjs/testing';
// import { CandidateUserController } from './candidate-user.controller';
// import { CandidateUserService } from './candidate-user.service';
// import { CandidateUserRepository } from './repositories/candidate-user.repository';
// import { CandidateUserInMemoryRepository } from '../../common/repositories/candidate-user/candidate-user-in-memory.repository';
// import { CandidateUserSerialize } from '../../common/serializers/candidate-user.serialize';

// describe('CandidateUserController', () => {
//   let controller: CandidateUserController;

//   beforeEach(async () => {
//     const module: TestingModule = await Test.createTestingModule({
//       controllers: [CandidateUserController],
//       providers: [
//         CandidateUserService,
//         CandidateUserSerialize,
//         {
//           provide: CandidateUserRepository,
//           useClass: CandidateUserInMemoryRepository,
//         },
//       ],
//     }).compile();

//     controller = module.get<CandidateUserController>(CandidateUserController);
//   });

//   it('should be defined', () => {
//     expect(controller).toBeDefined();
//   });
// });

// create a unit test for the CandidateUserController class using the Jest framework
// Path: src/application/candidate-user/candidate-user.controller.spec.ts
import { Test, TestingModule } from '@nestjs/testing';
import { CandidateUserController } from './candidate-user.controller';
import { CandidateUserService } from './candidate-user.service';
import { CandidateUserRepository } from './repositories/candidate-user.repository';
import { CandidateUserInMemoryRepository } from '../../common/repositories/candidate-user/candidate-user-in-memory.repository';
import { CandidateUserSerialize } from '../../common/serializers/candidate-user.serialize';
import { CandidateUser } from './entities/candidate-user.entity';
import { CreateCandidateUserDto } from './dto/create-candidate-user.dto';

describe('CandidateUserController', () => {
  let controller: CandidateUserController;
  let candidateUserService: CandidateUserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CandidateUserController],
      providers: [
        CandidateUserService,
        CandidateUserSerialize,
        {
          provide: CandidateUserRepository,
          useClass: CandidateUserInMemoryRepository,
        },
      ],
    }).compile();

    controller = module.get<CandidateUserController>(CandidateUserController);
    candidateUserService =
      module.get<CandidateUserService>(CandidateUserService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('create', () => {
    it('should create a new candidate user', async () => {
      const dto: CreateCandidateUserDto = {
        email: 'john-doe1@test',
        name: 'John Doe',
        password: '123456',
        confirmPassword: '123456',
      };

      const result = await controller.create(dto);

      expect(result).toStrictEqual({
        id: 4,
        name: 'John Doe',
        email: 'john-doe1@test',
        roles: 'candidate',
      });
    });
  });

  describe('findAll', () => {
    it('should return an array of candidate users', async () => {
      const result = await candidateUserService.findAll();

      expect(result).toStrictEqual([
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
      ]);
    });
  });

  describe('findOne', () => {
    it('should return a candidate user', async () => {
      const result = await candidateUserService.findOne(1);

      expect(result).toStrictEqual({
        createdAt: undefined,
        email: 'john-doe@test.com',
        id: 1,
        name: 'John Doe',
        profile: {
          areaOfInterest: undefined,
          availableTime: undefined,
          description: undefined,
          id: undefined,
          phone: undefined,
          urlGithub: undefined,
          urlLinkedin: undefined,
        },
        provider: null,
        providerId: null,
        roles: 'project',
        updatedAt: undefined,
      });
    });
  });
});
