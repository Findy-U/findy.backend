import { AppConfig } from '../../common/interfaces/app-config';

export default (): AppConfig => ({
  port: parseInt(process.env.PORT) || 3001,

  auth: {
    jwt: {
      secret: process.env.JWT_SECRET,
      expiresInSeconds:
        parseInt(process.env.JWT_EXPIRATION_TIME_SECONDS) || 900,
    },
    google: {
      clientId: process.env.GOOGLE_OAUTH_CLIENT_ID,
      clientSecret: process.env.GOOGLE_OAUTH_CLIENT_SECRET,
      redirect: process.env.GOOGLE_OAUTH_REDIRECT_URL,
    },
  },
});
