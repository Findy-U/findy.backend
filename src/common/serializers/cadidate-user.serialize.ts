export class CandidateUserSerialize {
  requestToDb(candidate: any) {
    return {
      name: candidate.name,
      email: candidate.email,
      password: candidate.password,
      role: candidate.role,
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
