import { CandidateUserDetailsInterface } from '../interfaces/candidate-user-details/candidate-user-details.interface';

export class CandidateUserDetailsSerialize {
  requestToDb(details: CandidateUserDetailsInterface) {
    return {
      detailsId: details.id,
      candidateUserId: details.candidateUserId,
      gender: details.gender,
      birthDate: details.birthDate.toLocaleDateString('pt-BR'),
      residencePlace: details.residencePlace,
      createdAt: details.createdAt.toLocaleDateString('pt-BR'),
      updatedAt: details.updatedAt.toLocaleDateString('pt-BR'),
    };
  }

  dbToResponseCreate(details: any) {
    return {
      detailsId: details.id,
      candidateUserId: details.candidateUserId,
      gender: details.gender,
      birthDate: details.birthDate.toLocaleDateString('pt-BR'),
      residencePlace: details.residencePlace,
    };
  }

  dbToResponse(details: any) {
    let createdAt = '';
    let updatedAt = '';
    details.createdAt
      ? (createdAt = details.createdAt.toLocaleDateString('pt-BR'))
      : (createdAt = null);
    details.updatedAt
      ? (updatedAt = details.updatedAt.toLocaleDateString('pt-BR'))
      : (updatedAt = null);
    return {
      detailsId: details.id,
      candidateUserId: details.candidateUserId,
      gender: details.gender,
      birthDate: details.birthDate.toLocaleDateString('pt-BR'),
      residencePlace: details.residencePlace,
      createdAt,
      updatedAt,
    };
  }
}
