import { CandidateUserInterface } from '../interfaces/candidate-user.interface';

export class CandidateUserSerialize {
  requestToDb(candidate: CandidateUserInterface) {
    return {
      name: candidate.name,
      email: candidate.email,
      password: candidate.password,
      roles: candidate.roles,
      provider: candidate.provider,
      providerId: candidate.providerId,
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
      providerId: candidate.providerId,
      createdAt: candidate.createdAt,
      updatedAt: candidate.updatedAt,
    };
  }
}
