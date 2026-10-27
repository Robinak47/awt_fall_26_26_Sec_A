import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Passports } from './entities/passports.entity.js';
import { privateDecrypt } from 'crypto';
import { Repository } from 'typeorm';
import { CreatePassportsDto } from './dtos/create-passports.dto.js';
import { UsersService } from '../users/users.service.js';

@Injectable()
export class PassportsService {
  constructor(
    @InjectRepository(Passports)
    private readonly passportRepo: Repository<Passports>,
    private readonly userService: UsersService,
  ) {}

  async createPassport(
    passport: CreatePassportsDto,
  ): Promise<Passports | string> {
    try {
      const usr = await this.userService.getUserById(passport.userId);
      if (usr) {
        const pass = await this.passportRepo.create({
          ...passport,
          user: usr,
        });
        return await this.passportRepo.save(pass);
      } else {
        return `user not found id ${passport.userId}`;
      }
    } catch {
      throw new BadRequestException(' Passport creation failed');
    }
  }

  async getAllPassports(): Promise<Passports[]> {
    return await this.passportRepo.find();
  }
}
