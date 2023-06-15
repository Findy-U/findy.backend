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

  dbToResponseAll(details: any) {
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

  dbToResponseOne(details: any) {
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
      user: {
        name: details.CandidateUser.name,
        email: details.CandidateUser.email,
        roles: details.CandidateUser.roles,
      },
    };
  }

  dbToResponseUpdate(details: any) {
    let createdAt = '';
    let updatedAt = '';
    details.createdAt
      ? (createdAt = details.createdAt.toLocaleDateString('pt-BR'))
      : (createdAt = null);
    details.updatedAt
      ? (updatedAt = details.updatedAt.toLocaleDateString('pt-BR'))
      : (updatedAt = null);
    return {
      message: 'Os dados foram atualizados com sucesso',
      details: {
        detailsId: details.id,
        candidateUserId: details.candidateUserId,
        gender: details.gender,
        birthDate: details.birthDate.toLocaleDateString('pt-BR'),
        residencePlace: details.residencePlace,
        createdAt,
        updatedAt,
      },
    };
  }
}
