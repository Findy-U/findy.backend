import { CandidateUserInterface } from '../interfaces/candidate-user/candidate-user.interface';

export class CandidateUserSerialize {
  requestToDb(candidate: CandidateUserInterface) {
    return {
      name: candidate.name,
      email: candidate.email,
      password: candidate.password,
      roles: candidate.roles,
      provider: candidate.provider,
      providerId: candidate.providerId,
      confirmationToken: candidate.confirmationToken,
      expiredConfirmationToken: candidate.expiredConfirmationToken,
      activated: candidate.activated,
    };
  }

  dbToResponseCreate(candidate: any) {
    return {
      id: candidate.id,
      name: candidate.name,
      email: candidate.email,
      roles: candidate.roles,
    };
  }

  dbToResponse(candidate: any) {
    return {
      id: candidate.id,
      name: candidate.name,
      email: candidate.email,
      roles: candidate.roles,
      provider: candidate.provider,
      completeSurvey: candidate.completeSurvey,
      providerId: candidate.providerId,
      createdAt: candidate.createdAt,
      updatedAt: candidate.updatedAt,
      profile: {
        id: candidate?.CandidateProfile?.id,
        description: candidate?.CandidateProfile?.description,
        urlGithub: candidate?.CandidateProfile?.urlGithub,
        urlLinkedin: candidate?.CandidateProfile?.urlLinkedin,
        phone: candidate?.CandidateProfile?.phone,
        availableTime: candidate?.CandidateProfile?.availableTime,
        areaOfInterest: candidate?.CandidateProfile?.areaOfInterest,
      },
    };
  }

  dbToResponseSurveyByUserId(data: any) {
    return {
      id: 4,
      name: data.name,
      email: data.email,
      roles: data.roles,
      CandidateUserDetails: {
        id: 6,
        gender: 'Masculino',
        birthDate: '2000-10-10T02:00:00.000Z',
        residencePlace: 'Anápolis',
        state: null,
        country: null,
      },
      SurveyMarketInformation: {
        id: 3,
        metFindy: 'Facebook',
        friendName: null,
        friendEmail: null,
      },
      SurveyProfessionalSituation: {
        id: 4,
        situation: 'Desenvolvimento Fullstack',
        ocupationArea:
          'Desempregado buscando oportunidades na área de tecnologia',
        objectives: 'Transição de carreira dentro da área de TI',
      },
      SurveyFeelings: {
        id: 4,
        professionalAchievement: 5,
        motivation: 'dddddddddddddddddddd',
      },
      SurveyNeeds: {
        id: 5,
        FindyHelp: [
          {
            id: 7,
            findyHelp: 'Mentoria e orientação personalizada',
            surveyNeedsId: 5,
          },
          {
            id: 8,
            findyHelp: 'Acesso a oportunidades de trabalho relevantes',
            surveyNeedsId: 5,
          },
        ],
        PrincipalDifficulties: [
          {
            id: 7,
            principalDifficulties: 'Falta de experiência prática',
            surveyNeedsId: 5,
          },
          {
            id: 8,
            principalDifficulties: 'Falta de orientação e mentoria',
            surveyNeedsId: 5,
          },
        ],
      },
    };
  }
}
