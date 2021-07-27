import { environment } from '../../../environments/environment.prod';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FacultyService {

  baseUrl: string = environment.baseUrl + 'faculty/';

  constructor(private http: HttpClient) { }

  createFaculty(value: any): any {
    return this.http.post(`${this.baseUrl}create`, value)
  }
  getFaculties(): any {
    return this.http.get(this.baseUrl + 'getFaculties')
  }

  delete(id: any): any {
    return this.http.delete(this.baseUrl + "deleteFacultyById/" + id)
  }
}
