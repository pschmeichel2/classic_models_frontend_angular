import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { Employee } from './employee';
import { Customer } from '../customers/customer';
import { BaseService } from '../baseservice';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService extends BaseService{

  constructor(private http: HttpClient) {
    super();
   }

  // GET
  GetEmployees(): Observable<Employee> {
    return this.http
      .get<Employee>(this.baseurl + '/employees/')
      .pipe(retry(1), catchError(this.errorHandl));
  }
  
  // GET
  GetEmployee(employeeNumber: string): Observable<Employee> {
    return this.http
      .get<Employee>(this.baseurl + '/employees/' + employeeNumber)
      .pipe(retry(1), catchError(this.errorHandl));
  }

    // GET
    GetCustomers(employeeNumber: string): Observable<Customer> {
      return this.http
        .get<Customer>(this.baseurl + '/employees/' + employeeNumber + '/customers')
        .pipe(retry(1), catchError(this.errorHandl));
    }
  
}
