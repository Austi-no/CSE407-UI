import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './layouts/home/home.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { NavBarComponent } from './layouts/nav-bar/nav-bar.component';
import { DashboardComponent } from './layouts/dashboard/dashboard.component';
import { FacultyComponent } from './components/faculty/faculty.component';
import { DepartmentComponent } from './components/department/department.component';
import { CourseComponent } from './components/course/course.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    NavBarComponent,
    DashboardComponent,
    FacultyComponent,
    DepartmentComponent,
    CourseComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,

    ToastrModule.forRoot({
      positionClass: 'toast-top-right',
      preventDuplicates: true
    }
    ),
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

})
export class AppModule { }
