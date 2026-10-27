import { Body, Controller, Get, Post } from '@nestjs/common';
import { PassportsService } from './passports.service.js';
import { CreatePassportsDto } from './dtos/create-passports.dto.js';
import { Passports } from './entities/passports.entity.js';

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
  async getAllPassports(): Promise<Passports[]> {
    return await this.passportsService.getAllPassports();
  }
}
