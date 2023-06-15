"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCandidateUserDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_candidate_user_dto_1 = require("./create-candidate-user.dto");
class UpdateCandidateUserDto extends (0, mapped_types_1.PartialType)(create_candidate_user_dto_1.CreateCandidateUserDto) {
}
exports.UpdateCandidateUserDto = UpdateCandidateUserDto;
//# sourceMappingURL=update-candidate-user.dto.js.map