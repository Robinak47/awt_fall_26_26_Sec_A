import { Module, forwardRef } from '@nestjs/common';
import { UsersService } from './users.service.js';
import { UsersController } from './users.controller.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from './entities/Users.entity.js';
import { PassportsModule } from '../passports/passports.module.js';
import { CarsModule } from '../cars/cars.module.js';

@Module({
  imports: [
    TypeOrmModule.forFeature([Users]),
    forwardRef(() => PassportsModule),
    forwardRef(() => CarsModule),
  ],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
