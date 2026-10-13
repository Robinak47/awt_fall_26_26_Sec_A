import { Injectable } from '@nestjs/common';
import { CoursesService } from '../courses/courses.service.js';

@Injectable()
export class StudentsService {
  constructor(private readonly courseService: CoursesService) {}
  studentRegistration(courseId: string) {
    const course = this.courseService.getCourseDetailsWithId(courseId);
    if (course && course.studentCount < 40) {
      return 'meow meow. Registration';
    } else {
      return 'course is full';
    }
  }
}
