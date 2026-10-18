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
