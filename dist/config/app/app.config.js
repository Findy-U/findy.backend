"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = () => ({
    port: parseInt(process.env.PORT) || 3001,
    mailHost: process.env.MAIL_HOST,
    mailUser: process.env.MAIL_USER,
    mailPassword: process.env.MAIL_PASSWORD,
    urlRedirectAuthGoogle: process.env.URL_REDIRECT_AUTHGOOGLE,
    urlRecoverPassword: process.env.URL_RECOVER_PASSWORD,
    auth: {
        jwt: {
            secret: process.env.JWT_SECRET,
            expiresInSeconds: parseInt(process.env.JWT_EXPIRATION_TIME_SECONDS) || 900,
        },
        google: {
            clientId: process.env.GOOGLE_OAUTH_CLIENT_ID,
            clientSecret: process.env.GOOGLE_OAUTH_CLIENT_SECRET,
            redirect: process.env.GOOGLE_OAUTH_REDIRECT_URL,
        },
    },
});
//# sourceMappingURL=app.config.js.map