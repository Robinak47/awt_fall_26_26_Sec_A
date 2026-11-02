import { BadRequestException, Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service.js';
import { RegistrationDto } from './dtos/registration.dto.js';
import { Users } from '../users/entities/Users.entity.js';
import * as brcypt from 'bcrypt';
import { LoginDto } from './dtos/login.dto.js';
import { log } from 'console';
import { JwtService } from '@nestjs/jwt';
import { emitWarning } from 'process';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async registration(user: RegistrationDto): Promise<Users> {
    const newPass = await brcypt.hash(user.password, 10);
    user.password = newPass;

    return await this.usersService.createUser({ ...user });
  }

  async login(loginDto: LoginDto): Promise<string> {
    try {
      const user = await this.usersService.getUserById(loginDto.id);
      console.log(user);
      if (user) {
        const passMatch = await brcypt.compare(
          loginDto.password,
          user.password,
        );
        if (passMatch) {
          const payloads = {
            id: user.id,
            email: user.email,
            role: user.role,
          };

          const access_token = await this.jwtService.sign(payloads);
          return access_token;
        } else {
          return 'password incorrect';
        }
      } else {
        return `user with id ${loginDto.id} not found`;
      }
    } catch {
      throw new BadRequestException('something went wrong');
    }
  }
}
