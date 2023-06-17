import { SurveyFeelingsInterface } from '../interfaces/survey-feelings/survey-feelings.interface';

export class SurveyFeelingsSerialize {
  requestToDb(details: SurveyFeelingsInterface) {
    return {
      detailsId: details.id,
      candidateUserId: details.candidateUserId,
      professionalAchievement: details.professionalAchievement,
      motivation: details.motivation,
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
      professionalAchievement: details.professionalAchievement,
      motivation: details.motivation,
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
      professionalAchievement: details.professionalAchievement,
      motivation: details.motivation,
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
      professionalAchievement: details.professionalAchievement,
      motivation: details.motivation,
    };
  }
}
