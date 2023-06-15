"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCandidateUserDetailsDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_candidate_user_details_dto_1 = require("./create-candidate-user-details.dto");
class UpdateCandidateUserDetailsDto extends (0, mapped_types_1.PartialType)(create_candidate_user_details_dto_1.CreateCandidateUserDetailsDto) {
}
exports.UpdateCandidateUserDetailsDto = UpdateCandidateUserDetailsDto;
//# sourceMappingURL=update-candidate-user-details.dto.js.map