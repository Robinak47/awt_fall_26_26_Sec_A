import { AuthGuard } from '@nestjs/passport';

export class JwtGuards extends AuthGuard('Jwt') {}
