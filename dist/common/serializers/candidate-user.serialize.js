"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CandidateUserSerialize = void 0;
class CandidateUserSerialize {
    requestToDb(candidate) {
        return {
            name: candidate.name,
            email: candidate.email,
            password: candidate.password,
            roles: candidate.roles,
            provider: candidate.provider,
            providerId: candidate.providerId,
        };
    }
    dbToResponseCreate(candidate) {
        return {
            id: candidate.id,
            name: candidate.name,
            email: candidate.email,
            roles: candidate.roles,
        };
    }
    dbToResponse(candidate) {
        var _a, _b, _c, _d, _e, _f, _g;
        return {
            id: candidate.id,
            name: candidate.name,
            email: candidate.email,
            roles: candidate.roles,
            provider: candidate.provider,
            providerId: candidate.providerId,
            createdAt: candidate.createdAt,
            updatedAt: candidate.updatedAt,
            profile: {
                id: (_a = candidate === null || candidate === void 0 ? void 0 : candidate.CandidateProfile) === null || _a === void 0 ? void 0 : _a.id,
                description: (_b = candidate === null || candidate === void 0 ? void 0 : candidate.CandidateProfile) === null || _b === void 0 ? void 0 : _b.description,
                urlGithub: (_c = candidate === null || candidate === void 0 ? void 0 : candidate.CandidateProfile) === null || _c === void 0 ? void 0 : _c.urlGithub,
                urlLinkedin: (_d = candidate === null || candidate === void 0 ? void 0 : candidate.CandidateProfile) === null || _d === void 0 ? void 0 : _d.urlLinkedin,
                phone: (_e = candidate === null || candidate === void 0 ? void 0 : candidate.CandidateProfile) === null || _e === void 0 ? void 0 : _e.phone,
                availableTime: (_f = candidate === null || candidate === void 0 ? void 0 : candidate.CandidateProfile) === null || _f === void 0 ? void 0 : _f.availableTime,
                areaOfInterest: (_g = candidate === null || candidate === void 0 ? void 0 : candidate.CandidateProfile) === null || _g === void 0 ? void 0 : _g.areaOfInterest,
            },
        };
    }
}
exports.CandidateUserSerialize = CandidateUserSerialize;
//# sourceMappingURL=candidate-user.serialize.js.map