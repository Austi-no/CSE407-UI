import { CourseService } from './course.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { DepartmentService } from '../department/department.service';
import { FacultyService } from '../faculty/faculty.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  form: FormGroup
  departmentList: any = [];
  facultyList: any = [];
  courseList: any = [];
  constructor(private fb: FormBuilder, private departmentService: DepartmentService, private service: CourseService, private facultyService: FacultyService, private toastr: ToastrService) { }

  ngOnInit() {
    this.form = this.fb.group({
      courseTitle: ['', Validators.required],
      courseCode: ['', Validators.required],
      dept: ['Select Department', Validators.required],
      semester: ['Select Semester', Validators.required],
      creditUnit: ['Select Credit Unit', Validators.required],
    })
    this.getDepartments()
    this.getCourses()

  }

  getDepartments() {
    this.departmentService.getDepartments().subscribe(res => {
      this.departmentList = res
    })
  }
  getCourses() {
    this.service.getCourses().subscribe(res => {
      this.courseList = res
    })
  }
  create() {
    console.log(this.form.value);

    this.service.createCourse(this.form.value).subscribe(res => {
      console.log(res);

      if (res.success === true) {
        this.toastr.success("", res.message);
        this.form.reset()
        this.getCourses()
      } else {
        this.toastr.error("", res.message)
      }
    }, err => {
      this.toastr.error("", err.error.message)
    })

  }

  deleteCourse(list: any) {
    this.service.delete(list?.id).subscribe(res => {
      if (res.success === true) {
        this.toastr.success("", res.message);
        this.getCourses()
      } else {
        this.toastr.error("", res.message)
      }
    }, (err: any) => {
      this.toastr.error("", err.error.message)
    })
  }

  updateFaculty(data) {
    console.log(data);

  }

}
