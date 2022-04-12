import { FacultyService } from './faculty.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-faculty',
  templateUrl: './faculty.component.html',
  styleUrls: ['./faculty.component.css']
})
export class FacultyComponent implements OnInit {
  facultyForm: FormGroup
  facultyList: any = [];
  constructor(private fb: FormBuilder, private service: FacultyService, private toastr: ToastrService) { }

  ngOnInit() {
    this.facultyForm = this.fb.group({
      name: ['', Validators.required]
    })
    this.getFaculties()
  }

  getFaculties() {
    this.service.getFaculties().subscribe(res => {
      // console.log(res);
      this.facultyList = res

    })
  }

  create() {

    this.service.createFaculty(this.facultyForm.value).subscribe(res => {

      if (res.success === true) {
        this.toastr.success("", res.message);
        this.facultyForm.reset()
        this.getFaculties()
      } else {
        this.toastr.error("", res.message)
      }
    }, err => {
      this.toastr.error("", err.error.message)
    })

  }

  deleteFaculty(list: any) {
    this.service.delete(list.id).subscribe(res => {
      if (res.success === true) {
        this.toastr.success("", res.message);
        this.getFaculties()
      } else {
        this.toastr.error("", res.message)
      }
    }, (err: any) => {
      this.toastr.error("", err.error.message)
    })
  }

  updateFaculty(data: any) {
    this.facultyForm.patchValue(data);
  }

}
