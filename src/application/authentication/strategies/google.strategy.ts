import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, VerifyCallback } from 'passport-google-oauth20';
import { CandidateUserInMemoryRepository } from '../../../common/repositories/candidate-user/candidate-user-in-memory.repository';

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {
  constructor(
    private configService: ConfigService,
    private candidateRepoistory: CandidateUserInMemoryRepository,
  ) {
    super({
      clientID: configService.get<string>('auth.google.clientId'),
      clientSecret: configService.get<string>('auth.google.clientSecret'),
      callbackURL: configService.get<string>('auth.google.redirect'),
      scope: ['email', 'profile'],
    });
  }

  async validate(
    _accessToken: string,
    _refreshToken: string,
    profile: any,
    done: VerifyCallback,
  ): Promise<any> {
    const { id, emails } = profile;

    // const user = {
    //   idSocial: id,
    //   fullName: profile.displayName,
    //   email: emails[0].value,
    // };

    let user = await this.candidateRepoistory.findByEmail(emails);
    if (!user) {
      user = await this.candidateRepoistory.create({
        name: profile.displayName,
        email: profile.emails[0].value,
        role: 'candidate',
        providerId: id,
        provider: 'google',
        active: true
      });
    }

    return done(null, user);
  }
}
