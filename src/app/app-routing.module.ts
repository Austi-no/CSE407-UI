import { CourseComponent } from './components/course/course.component';
import { DepartmentComponent } from './components/department/department.component';
import { FacultyComponent } from './components/faculty/faculty.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './layouts/dashboard/dashboard.component';
import { HomeComponent } from './layouts/home/home.component';


const routes: Routes = [

  {
    path: '', component: HomeComponent,
    children: [
      {
        path: '', component: DashboardComponent
      },
      {
        path: 'faculty', component: FacultyComponent
      },
      {
        path: 'department', component: DepartmentComponent
      },
      {
        path: 'course', component: CourseComponent
      },


    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
