import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../Models/employee';
import { Observable } from 'rxjs/internal/Observable';
import { DecimalPipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class EmplyeeService {

  public result: any;
  constructor(private http: HttpClient) { }

  getEmployee(): Observable<any> {

    return this.http.get('http://localhost:5000/api/values');
  }

  getEmployeeId(id:string): Observable<any> {

    return this.http.get('http://localhost:5000/api/values/'+id);
  }

  saveEmp(employee: Employee) {
  
    return this.http.post<any>('http://localhost:5000/api/values', employee);
  }

  editEmp(employee: Employee) {
  
    return this.http.put<any>('http://localhost:5000/api/values/'+employee.id, employee);
  }

  deleteEmp(id: string) {
    
    return this.http.delete<any>('http://localhost:5000/api/values/'+id);
  }

}
