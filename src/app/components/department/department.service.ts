import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { environment } from "../../../environments/environment.prod";

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  baseUrl: string = environment.baseUrl + 'department/';

  constructor(private http: HttpClient) { }

  createDepartment(value: any): any {
    return this.http.post(`${this.baseUrl}create`, value)
  }
  getDepartments(): any {
    return this.http.get(this.baseUrl + 'getDepartments')
  }

  delete(id: any): any {
    return this.http.delete(this.baseUrl + "deleteDepartmentById/" + id)
  }

  getDepartmentById(id: any, value: any): any {
    return this.http.put(`${this.baseUrl}updateDepartment/${id}`, value)

  }
}
