import { Module } from '@nestjs/common';
import { CoursesContoller } from './courses.controller.js';
import { CoursesService } from './courses.service.js';

@Module({
  controllers: [CoursesContoller],
  providers: [CoursesService],
  imports: [],
  exports: [CoursesService],
})
export class CoursesModule {}
