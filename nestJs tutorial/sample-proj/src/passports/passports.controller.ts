import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { PassportsService } from './passports.service.js';
import { CreatePassportsDto } from './dtos/create-passports.dto.js';
import { Passports } from './entities/passports.entity.js';
import { JwtGuards } from '../auth/jwtGuards.js';
import { Roles } from '../auth/roles/roles/roles.decorator.js';
import { RolesGuard } from '../auth/roles/roles/roles.guard.js';

@Controller('passports')
export class PassportsController {
  constructor(private readonly passportsService: PassportsService) {}

  @Post('create-passport')
  async createPassport(
    @Body() passport: CreatePassportsDto,
  ): Promise<Passports | string> {
    return this.passportsService.createPassport(passport);
  }

  @Get()
  @UseGuards(JwtGuards, RolesGuard)
  @Roles('admin', 'faculty')
  async getAllPassports(): Promise<Passports[]> {
    return await this.passportsService.getAllPassports();
  }
}
