import { Injectable } from '@nestjs/common';

@Injectable()
export class CoursesService {
  constructor() {}
  getCourseDetailsWithId(id: string) {
    if (id === '1') {
      return {
        courseId: 1,
        courseName: 'AWT',
        studentCount: 30,
        totalStudent: 40,
      };
    }
  }

  getStudentInfo() {}
}
