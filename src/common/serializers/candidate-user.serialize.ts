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
      profile: candidate.CandidateProfile
        ? {
            id: candidate?.CandidateProfile?.id,
            description: candidate?.CandidateProfile?.description,
            urlGithub: candidate?.CandidateProfile?.urlGithub,
            urlLinkedin: candidate?.CandidateProfile?.urlLinkedin,
            phone: candidate?.CandidateProfile?.phone,
            availableTime: candidate?.CandidateProfile?.availableTime,
            areaOfInterest: candidate?.CandidateProfile?.areaOfInterest,
            siklls: candidate?.CandidateProfile?.Skill.map((item: any) => ({
              id: item.id,
              type: item.type,
              name: item.name,
            })),
            occupationArea: candidate?.CandidateProfile?.occupationArea.map(
              (item: any) => ({
                id: item.id,
                title: item.title,
              }),
            ),
          }
        : null,
    };
  }

  dbToResponseSurveyByUserId(data: any) {
    return {
      id: data.id,
      name: data.name,
      email: data.email,
      createdAt: data.createdAt,
      updatedAt: data.updatedAt,
      roles: data.roles,
      CandidateUserDetails: {
        id: data?.CandidateUserDetails?.id,
        candidateUserId: data.CandidateUserDetails?.candidateUserId,
        gender: data?.CandidateUserDetails?.gender,
        birthDate: data?.CandidateUserDetails?.birthDate,
        residencePlace: data?.CandidateUserDetails?.residencePlace,
        state: data?.CandidateUserDetails?.state,
        country: data?.CandidateUserDetails?.country,
        createdAt: data?.CandidateUserDetails?.createdAt,
        updatedAt: data?.CandidateUserDetails?.updatedAt,
      },
      SurveyMarketInformation: {
        id: data?.SurveyMarketInformation?.id,
        metFindy: data?.SurveyMarketInformation?.metFindy,
        candidateUserId: data?.SurveyMarketInformation?.candidateUserId,
        friendName: data?.SurveyMarketInformation?.friendName,
        friendEmail: data?.SurveyMarketInformation?.friendEmail,
        createdAt: data?.SurveyMarketInformation?.createdAt,
      },
      SurveyProfessionalSituation: {
        id: data?.SurveyProfessionalSituation?.id,
        situation: data?.SurveyProfessionalSituation?.situation,
        ocupationArea: data?.SurveyProfessionalSituation?.ocupationArea,
        objectives: data?.SurveyProfessionalSituation?.objectives,
        candidateUserId: data?.SurveyProfessionalSituation?.candidateUserId,
        createdAt: data?.SurveyProfessionalSituation?.createdAt,
      },
      SurveyFeelings: {
        id: data?.SurveyFeelings?.id,
        candidateUserId: data?.SurveyFeelings?.candidateUserId,
        professionalAchievement: data?.SurveyFeelings?.professionalAchievement,
        motivation: data?.SurveyFeelings?.motivation,
        createdAt: data?.SurveyFeelings?.createdAt,
      },
      SurveyNeeds: {
        id: data?.SurveyNeeds?.id,
        candidateUserId: data?.SurveyNeeds?.candidateUserId,
        createdAt: data?.SurveyNeeds?.createdAt,
        PrincipalDifficulties: data?.SurveyNeeds?.PrincipalDifficulties.map(
          (item: any) => item,
        ),
        FindyHelp: data?.SurveyNeeds?.FindyHelp.map((item: any) => item),
      },
    };
  }
}
