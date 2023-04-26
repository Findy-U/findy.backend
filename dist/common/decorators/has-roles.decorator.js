"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HasRoles = void 0;
const common_1 = require("@nestjs/common");
const HasRoles = (...roles) => (0, common_1.SetMetadata)('roles', roles);
exports.HasRoles = HasRoles;
//# sourceMappingURL=has-roles.decorator.js.map