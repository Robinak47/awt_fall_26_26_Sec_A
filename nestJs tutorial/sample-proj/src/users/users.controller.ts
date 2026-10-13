import {
  Body,
  Controller,
  DefaultValuePipe,
  Delete,
  Get,
  Param,
  ParseFloatPipe,
  ParseIntPipe,
  Post,
  Query,
  ValidationPipe,
  Put,
  Patch,
} from '@nestjs/common';
import { UsersService } from './users.service.js';
import { CreateUserDto } from './dtos/create-user.dto.js';
import { GetParamDto } from './dtos/get-param.dto.js';
import { UpdateUserDto } from './dtos/update-user-partially.dto.js';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get(':id')
  getUserById(@Param('id') id: GetParamDto) {
    console.log(typeof id);
  }

  @Get()
  getUser(@Query('data', new DefaultValuePipe(10)) data: any) {
    console.log(typeof data);
    console.log(data);
  }

  @Delete(':id')
  deleteUserById(
    @Param('id')
    id: any,
  ) {
    console.log(typeof id);
  }

  @Post('create-user')
  createUser(@Body() user: CreateUserDto) {
    console.log(user.id);
    console.log(user.name);
    console.log(user.age);
    console.log(user.email);
    console.log(user.address);
    console.log(user.gender);
    console.log(user.isBangladeshi);
    console.log(user.password);
    //console.log(user.isFootballer);

    return 'user successfully created';
  }

  @Put('updateUserFully/:id')
  updateUserFully(@Param('id') id: string, @Body() user: UpdateUserDto) {
    console.log(user.id);
    console.log(user.name);
    console.log(user.age);
    console.log(user.email);
    console.log(user.address);
    console.log(user.gender);
    console.log(user.isBangladeshi);
    console.log(user.password);
    return 'updated user fully';
  }

  @Patch('updateUserPartially/:id')
  updateUserPartially(@Param('id') id: string, @Body() user: UpdateUserDto) {
    console.log(user.id);
    console.log(user.name);
    console.log(user.age);
    console.log(user.email);
    console.log(user.address);
    console.log(user.gender);
    console.log(user.isBangladeshi);
    console.log(user.password);
    return 'user updated partially';
  }
}
