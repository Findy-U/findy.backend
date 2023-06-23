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
}
