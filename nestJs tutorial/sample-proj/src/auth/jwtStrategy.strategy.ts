import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: 'Meow-Meow',
    });
  }

  async validate(payloads: any) {
    return {
      id: payloads.id,
      email: payloads.email,
      role: payloads.role,
    };
  }
}
