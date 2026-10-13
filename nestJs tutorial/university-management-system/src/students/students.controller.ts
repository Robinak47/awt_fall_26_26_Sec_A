import { Controller, Post, Query } from '@nestjs/common';
import { StudentsService } from './students.service.js';

@Controller('students')
export class StudentsController {
  constructor(private readonly studentsService: StudentsService) {}

  @Post('registration')
  studentRegistration(@Query('courseId') courseId: string) {
    return this.studentsService.studentRegistration(courseId);
  }
}
