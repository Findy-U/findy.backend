import { CandidateUserInterface } from '../interfaces/candidate-user.interface';

export class CandidateUserSerialize {
  requestToDb(candidate: CandidateUserInterface) {
    return {
      name: candidate.name,
      email: candidate.email,
      password: candidate.password,
      role: candidate.role,
      provider: candidate.provider,
      providerId: candidate.providerId,
    };
  }

  dbToResponse(candidate: any) {
    return {
      id: candidate.id,
      name: candidate.name,
      email: candidate.email,
      role: candidate.role,
    };
  }
}
