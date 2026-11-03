import {
  Body,
  Controller,
  Get,
  Header,
  Headers,
  Post,
  UseGuards,
  Req,
} from '@nestjs/common';
import type { Request } from 'express';
import { AuthService } from './auth.service.js';
import { RegistrationDto } from './dtos/registration.dto.js';
import { Users } from '../users/entities/Users.entity.js';
import { LoginDto } from './dtos/login.dto.js';
import { JwtGuards } from './jwtGuards.js';
import { RolesGuard } from './roles/roles/roles.guard.js';

import { Roles } from './roles/roles/roles.decorator.js';

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

  @Get('sayMyName')
  @UseGuards(JwtGuards, RolesGuard)
  @Roles('admin', 'faculty')
  sayMyName(@Req() req: Request) {
    return 'heigenburg';
  }

  @Get('me')
  @UseGuards(JwtGuards)
  getProfile(@Req() req: Request) {
    return req.user;
  }
}
