import { SurveyNeedsInterface } from '../interfaces/survey-needs/survey-needs.interface';

export class SurveyNeedsSerialize {
  requestToDb(details: SurveyNeedsInterface) {
    return {
      detailsId: details.id,
      candidateUserId: details.candidateUserId,
      createdAt: details.createdAt.toLocaleDateString('pt-BR'),
    };
  }

  dbToResponseAll(details: any) {
    details.createdAt
      ? (details.createdAt = details.createdAt.toLocaleDateString('pt-BR'))
      : (details.createdAt = null);
    return {
      detailsId: details.id,
      candidateUserId: details.candidateUserId,
      professionalSituation: details.professionalSituation,
      professionalArea: details.professionalArea,
      goal: details.goal,
      createdAt: details.createdAt,
    };
  }

  dbToResponseOne(details: any) {
    let createdAt = '';
    details.createdAt
      ? (createdAt = details.createdAt.toLocaleDateString('pt-BR'))
      : (createdAt = null);
    return {
      detailsId: details.id,
      candidateUserId: details.candidateUserId,
      professionalSituation: details.professionalSituation,
      professionalArea: details.professionalArea,
      goal: details.goal,
      createdAt,
      user: {
        name: details.CandidateUser.name,
        email: details.CandidateUser.email,
        roles: details.CandidateUser.roles,
      },
    };
  }

  dbToResponseCreate(details: any) {
    return {
      detailsId: details.id,
      candidateUserId: details.candidateUserId,
      professionalSituation: details.professionalSituation,
      professionalArea: details.professionalArea,
      goal: details.goal,
    };
  }
}
