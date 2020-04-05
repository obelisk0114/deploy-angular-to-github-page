import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentFirebaseRoutingModule } from './student-firebase-routing.module';
import { CourseComponent } from './course/course.component';
import { StudentHomeComponent } from './student-home/student-home.component';


@NgModule({
  declarations: [CourseComponent, StudentHomeComponent],
  imports: [
    CommonModule,
    StudentFirebaseRoutingModule
  ]
})
export class StudentFirebaseModule { }
