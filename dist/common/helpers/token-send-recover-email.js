"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExpireTokenValidationService = void 0;
const crypto_1 = require("crypto");
class ExpireTokenValidationService {
    generateToken() {
        const token = (0, crypto_1.randomBytes)(32).toString('hex');
        return token;
    }
}
exports.ExpireTokenValidationService = ExpireTokenValidationService;
//# sourceMappingURL=token-send-recover-email.js.map