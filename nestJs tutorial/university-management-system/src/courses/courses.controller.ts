import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { CoursesService } from './courses.service.js';

@Controller('courses')
export class CoursesContoller {
  constructor(private readonly coursesService: CoursesService) {}
  @Get()
  coursesList() {
    return 'all courses List:';
  }

  @Get(':id')
  coursesListWithId(@Param('id') id: string) {
    return `course details with id ${id}`;
  }

  @Post()
  createCourse(@Body() course: any) {
    return `course code ${course.courseCode} course name ${course.courseName}  credit hour ${course.creditHours} is lab course ${course.islabIntegrated}`;
  }

  @Put()
  updateCourseFullt() {
    return 'Course Updated Fully';
  }

  @Patch()
  courseUpdatePartially() {
    return 'course updated partially';
  }

  @Patch(':id')
  courseUpdatePartiallyWithId(
    @Param('id') id: string,
    @Query('name') name?: string,
    @Query('numOfGoals') numOfGoals?: string,
  ) {
    if (name && numOfGoals) {
      return `course updated partially ${id} ${name} ${numOfGoals}`;
    } else {
      return `course updated partially ${id}`;
    }
  }

  @Delete(':id')
  deleteCourse(@Param('id') id: string) {
    return `course deleted successfully where course id is ${id}`;
  }

  @Delete(':id/:name')
  deleteCourseWithName(@Param('id') id: string, @Param('name') name: string) {
    return `course deleted successfully where course id is ${id} ${name}`;
  }
}
