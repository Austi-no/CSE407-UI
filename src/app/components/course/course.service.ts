import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from "../../../environments/environment.prod";

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  baseUrl: string = environment.baseUrl + 'course/';

  constructor(private http: HttpClient) { }

  createCourse(value: any): any {
    return this.http.post(`${this.baseUrl}create`, value)
  }
  getCourses(): any {
    return this.http.get(this.baseUrl + 'getCourse')
  }

  delete(id: any): any {
    return this.http.delete(this.baseUrl + "deleteCourseById/" + id)
  }
}
