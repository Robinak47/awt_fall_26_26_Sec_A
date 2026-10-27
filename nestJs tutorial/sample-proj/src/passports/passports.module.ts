import { Module, forwardRef } from '@nestjs/common';
import { PassportsService } from './passports.service.js';
import { PassportsController } from './passports.controller.js';
import { UsersModule } from '../users/users.module.js';
import { TypeORMError } from 'typeorm';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Passports } from './entities/passports.entity.js';

@Module({
  imports: [forwardRef(() => UsersModule), TypeOrmModule.forFeature([Passports])],
  controllers: [PassportsController],
  providers: [PassportsService],
})
export class PassportsModule {}
