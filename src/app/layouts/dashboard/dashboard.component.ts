import { CourseService } from './../../components/course/course.service';
import { DepartmentService } from './../../components/department/department.service';
import { FacultyService } from './../../components/faculty/faculty.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  facultyList: any = [];
  departmentList: any = [];
  courseList: any = [];

  constructor(private facultyService: FacultyService, private departmentService: DepartmentService, private courseService: CourseService) { }

  ngOnInit() {
    this.getFaculties()
    this.getDepartment()
    this.getCourses()
  }


  getFaculties() {
    this.facultyService.getFaculties().subscribe(res => {
      this.facultyList = res
    })
  }

  totalFaculties() {
    return this.facultyList.length
  }

  getDepartment() {
    this.departmentService.getDepartments().subscribe(res => {
      this.departmentList = res
    })
  }

  totalDepartment() {
    return this.departmentList.length
  }

  getCourses() {
    this.courseService.getCourses().subscribe(res => {
      this.courseList = res
    })
  }

  totalCourses() {
    return this.courseList.length
  }

}
