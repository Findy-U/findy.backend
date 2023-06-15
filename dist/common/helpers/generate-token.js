"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateTemporaryToken = void 0;
const crypto_1 = require("crypto");
const EXPIRATION_TIME = 48 * 60 * 60 * 1000;
exports.generateTemporaryToken = {
    token: (0, crypto_1.randomBytes)(32).toString('hex'),
    expiredAtConfirmationToken: () => {
        const expiredAt = new Date();
        expiredAt.setHours(expiredAt.getHours() + 2);
        return expiredAt;
    },
    expiredAtRecoverToken: new Date(Date.now() + EXPIRATION_TIME),
};
//# sourceMappingURL=generate-token.js.map