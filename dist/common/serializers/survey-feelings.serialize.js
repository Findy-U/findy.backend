"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SurveyFeelingsSerialize = void 0;
class SurveyFeelingsSerialize {
    requestToDb(details) {
        return {
            detailsId: details.id,
            candidateUserId: details.candidateUserId,
            professionalAchievement: details.professionalAchievement,
            motivation: details.motivation,
            createdAt: details.createdAt.toLocaleDateString('pt-BR'),
        };
    }
    dbToResponseAll(details) {
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
    dbToResponseOne(details) {
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
    dbToResponseCreate(details) {
        return {
            detailsId: details.id,
            candidateUserId: details.candidateUserId,
            professionalAchievement: details.professionalAchievement,
            motivation: details.motivation,
        };
    }
}
exports.SurveyFeelingsSerialize = SurveyFeelingsSerialize;
//# sourceMappingURL=survey-feelings.serialize.js.map