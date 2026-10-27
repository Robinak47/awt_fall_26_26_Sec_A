import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users } from './entities/Users.entity.js';
import { CreateUserDto } from './dtos/create-user.dto.js';
import { UpdateUserDto } from './dtos/update-user-partially.dto.js';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users)
    private readonly usersRepo: Repository<Users>,
  ) {}

  async createUser(user: CreateUserDto): Promise<Users> {
    try {
      const userEntity = await this.usersRepo.create(user);
      return await this.usersRepo.save(userEntity);
    } catch {
      throw new BadRequestException('Failed to create instance');
    }
  }

  async getAllUsers(): Promise<Users[]> {
    return await this.usersRepo.find({
      select: {
        id: true,
        name: true,
        email: true,
        age: true,
        gender: true,
        isBangladeshi: true,
        deleteUser: true,
      },
      withDeleted: true,
    });
  }

  async getUserById(id: string): Promise<Users | null> {
    return await this.usersRepo.findOne({
      where: {
        id: id,
      },
      select: {
        id: true,
        name: true,
        email: true,
        age: true,
        gender: true,
        isBangladeshi: true,
      },
    });
  }

  async deleteUser(id: string): Promise<String> {
    const result = (await this.usersRepo.delete(id)).affected;
    if (result != null && result > 0) {
      return `user deleted with id ${id}`;
    } else {
      throw new BadRequestException('User not found');
    }
  }

  async deleteUserSoft(id: string): Promise<String> {
    const result = (await this.usersRepo.softDelete(id)).affected;
    if (result != null && result > 0) {
      return `user deleted with id ${id}`;
    } else {
      throw new BadRequestException('User not found');
    }
  }

  async replaceUser(
    id: string,
    user: UpdateUserDto,
  ): Promise<undefined | Users | string> {
    try {
      const us = await this.usersRepo.findOne({
        where: {
          id: id,
        },
      });

      const res = (await this.usersRepo.update(id, user)).affected;
      if (res != undefined && res > 0) {
        const user = await this.usersRepo.findOneBy({ id });
        return `user updated with id ${id}`;
      } else {
        return `user with id ${id} not found`;
      }
    } catch {
      throw new BadRequestException('User not Found');
    }
  }

  async updateUser(
    id: string,
    user: UpdateUserDto,
  ): Promise<undefined | Users | string> {
    try {
      const us = await this.usersRepo.findOne({
        where: {
          id: id,
        },
      });

      const res = (await this.usersRepo.update(id, user)).affected;
      if (res != undefined && res > 0) {
        const user = await this.usersRepo.findOneBy({ id });
        return `user updated with id ${id}`;
      } else {
        return `user with id ${id} not found`;
      }
    } catch {
      throw new BadRequestException('User not Found');
    }
  }
}
