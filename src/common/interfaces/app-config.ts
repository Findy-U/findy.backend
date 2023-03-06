export interface AppConfig {
  port: number;

  auth: {
    jwt: {
      secret: string;
      expiresInSeconds: number;
    };
    google: {
      clientId: string;
      clientSecret: string;
      redirect: string;
    };
  };
  'auth.jwt.secret'?: string;
  'auth.jwt.expiresInSeconds'?: number;
  'auth.google.clientId'?: string;
  'auth.google.clientSecret'?: string;
  'auth.google.redirect'?: string;
}
