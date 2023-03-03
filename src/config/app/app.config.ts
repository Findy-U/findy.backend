import { AppConfig } from '../../common/interfaces/app-config';

export default (): AppConfig => ({
  port: parseInt(process.env.PORT) || 3001,

  auth: {
    jwt: {
      secret: process.env.JWT_SECRET,
      expiresInSeconds:
        parseInt(process.env.JWT_EXPIRATION_TIME_SECONDS) || 900,
    },
  },
});
