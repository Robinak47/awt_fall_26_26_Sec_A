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
  UseInterceptors,
  UploadedFile,
  ParseFilePipe,
  MaxFileSizeValidator,
  FileTypeValidator,
  Res,
} from '@nestjs/common';
import { UsersService } from './users.service.js';
import { CreateUserDto } from './dtos/create-user.dto.js';
import { GetParamDto } from './dtos/get-param.dto.js';
import { UpdateUserDto } from './dtos/update-user-partially.dto.js';
import { FileInterceptor } from '@nestjs/platform-express';
import multer, { diskStorage, memoryStorage } from 'multer';
import { promises as fs } from 'fs';
import type { Response } from 'express';
import { Users } from './entities/Users.entity.js';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get(':id')
  async getUserById(@Param('id') id: string) {
    return await this.usersService.getUserById(id);
  }

  @Get()
  async getUser(@Query('data', new DefaultValuePipe(10)) data: any) {
    return await this.usersService.getAllUsers();
  }

  @Delete(':id')
  async deleteUserById(
    @Param('id')
    id: string,
  ) {
    return await this.usersService.deleteUser(id);
  }

  @Delete('soft/soft/:id')
  async deleteUserByIdSoft(
    @Param('id')
    id: string,
  ) {
    return await this.usersService.deleteUserSoft(id);
  }

  @Post('create-user')
  async createUser(@Body() user: CreateUserDto): Promise<Users> {
    return await this.usersService.createUser(user);
  }

  @Put('updateUserFully/:id')
  async updateUserFully(
    @Param('id') id: string,
    @Body() user: UpdateUserDto,
  ): Promise<Users | null | string | undefined> {
    return await this.usersService.replaceUser(id, user);
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

  @Post('upload-profile-pic')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: memoryStorage(),
    }),
  )
  async uplodProfilePic(
    @UploadedFile(
      new ParseFilePipe({
        validators: [
          new FileTypeValidator({
            fileType: /image\/jpeg/,
          }),
          new MaxFileSizeValidator({
            maxSize: 2 * 1024 * 1024,
          }),
        ],
      }),
    )
    file: Express.Multer.File,
  ) {
    const fileName = Date.now() + file.originalname;
    const destination = './uploads';
    const filePath = `${destination}/${fileName}`;

    await fs.writeFile(filePath, file.buffer);

    console.log(file.originalname);
    console.log(file.size);
    console.log(file.mimetype);
  }

  @Get('download-file/download/download')
  downloadFile(@Query('fileName') fileName: string, @Res() res: Response) {
    res.sendFile(fileName, { root: './uploads' });
  }
}
