import { CandidateUserDetailsInterface } from '../interfaces/candidate-user-details/candidate-user-details.interface';

export class CandidateUserDetailsSerialize {
  requestToDb(details: CandidateUserDetailsInterface) {
    return {
      gender: details.gender,
      birthDate: details.birthDate,
      residencePlace: details.residencePlace,
    };
  }

  dbToResponseCreate(details: any) {
    return {
      id: details.id,
      gender: details.gender,
      birthDate: details.birthDate,
      residencePlace: details.residencePlace,
    };
  }

  dbToResponse(details: any) {
    return {
      id: details.id,
      gender: details.gender,
      birthDate: details.birthDate,
      residencePlace: details.residencePlace,
      createdAt: details.createdAt,
      updatedAt: details.updatedAt,
    };
  }
}
