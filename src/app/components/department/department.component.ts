import { FacultyService } from './../faculty/faculty.service';
import { ToastrService } from 'ngx-toastr';
import { DepartmentService } from './department.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {

  form: FormGroup
  departmentList: any = [];
  facultyList: any = [];
  department: any;

  deptName: any
  facultyName: any
  obj: any = {};
  constructor(private fb: FormBuilder, private service: DepartmentService, private facultyService: FacultyService, private toastr: ToastrService) { }

  ngOnInit() {
    this.form = this.fb.group({
      name: ['', Validators.required],
      faculty: ['Select Faculty', Validators.required],
    })
    this.getDepartments()
    this.getFaculties()
  }

  getDepartments() {
    this.service.getDepartments().subscribe(res => {
      this.departmentList = res

    })
  }

  getFaculties() {
    this.facultyService.getFaculties().subscribe(res => {
      this.facultyList = res
    })
  }

  create() {
    this.service.createDepartment(this.form.value).subscribe(res => {
      console.log(res);

      if (res.success === true) {
        this.toastr.success("", res.message);
        this.form.reset()
        this.getDepartments()
      } else {
        this.toastr.error("", res.message)
      }
    }, err => {
      this.toastr.error("", err.error.message)
    })

  }

  deleteDept(list: any) {
    this.service.delete(list?.id).subscribe(res => {
      if (res.success === true) {
        this.toastr.success("", res.message);
        this.getDepartments()
      } else {
        this.toastr.error("", res.message)
      }
    }, (err: any) => {
      this.toastr.error("", err.error.message)
    })
  }


  updateDept(data) {
    this.department = data
    // console.log(this.department);
  }

  updateData() {
    this.obj = {
      name: this.deptName,
      faculty: this.facultyName,
    }
    console.log(this.obj);
  }
}
