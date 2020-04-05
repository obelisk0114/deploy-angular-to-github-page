import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentHomeComponent } from './student-home/student-home.component';
import { CourseComponent } from './course/course.component';


const routes: Routes = [
  {
    path: 'home', component: StudentHomeComponent
  },
  {
    path: 'course', component: CourseComponent
  },
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentFirebaseRoutingModule { }
