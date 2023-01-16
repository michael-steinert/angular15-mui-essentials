import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  constructor(private httpClient: HttpClient) {}

  addEmployee(data: any): Observable<any> {
    return this.httpClient.post('http://127.0.0.1:8090/employees', data);
  }

  updateEmployee(id: number, data: any): Observable<any> {
    return this.httpClient.put(`http://127.0.0.1:8090/employees/${id}`, data);
  }

  getEmployeeList(): Observable<any> {
    return this.httpClient.get('http://127.0.0.1:8090/employees');
  }

  deleteEmployee(id: number): Observable<any> {
    return this.httpClient.delete(`http://127.0.0.1:8090/employees/${id}`);
  }
}
