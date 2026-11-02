import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service.js';
import { RegistrationDto } from './dtos/registration.dto.js';
import { Users } from '../users/entities/Users.entity.js';
import { promises as fs } from 'fs';
import { LoginDto } from './dtos/login.dto.js';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('registration')
  async registration(@Body() user: RegistrationDto): Promise<Users> {
    console.log('hits');
    return await this.authService.registration(user);
  }

  @Post('login')
  async login(@Body() loginDto: LoginDto): Promise<string> {
    return await this.authService.login(loginDto);
  }
}
