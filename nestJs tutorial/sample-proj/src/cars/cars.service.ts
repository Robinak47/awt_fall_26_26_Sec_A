import { BadGatewayException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Cars } from './entities/cars.entity.js';
import { Repository } from 'typeorm';
import { UsersService } from '../users/users.service.js';
import { CreateCarDto } from './dtos/create-car.dto.js';

@Injectable()
export class CarsService {
  constructor(
    @InjectRepository(Cars) private readonly carRepo: Repository<Cars>,
    private readonly userService: UsersService,
  ) {}

  async createCar(car: CreateCarDto): Promise<Cars | string> {
    try {
      const usr = await this.userService.getUserById(car.userId);
      if (usr) {
        const cr = await this.carRepo.create({
          ...car,
          user: usr,
        });

        return await this.carRepo.save(cr);
      } else {
        return `user with Id ${car.userId} not found`;
      }
    } catch {
      throw new BadGatewayException('Car creation failed');
    }
  }
}
