import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { Customer } from './customer';
import { BaseService } from '../baseservice';
import { Order } from '../orders/order';

@Injectable({
  providedIn: 'root'
})
export class CustomersService extends BaseService{

  constructor(private http: HttpClient) {
    super();
   }

  // GET
  GetCustomers(): Observable<Customer> {
    return this.http
      .get<Customer>(this.baseurl + '/customers/')
      .pipe(retry(1), catchError(this.errorHandl));
  }
  
  // GET
  GetCustomer(customerNumber: string): Observable<Customer> {
    return this.http
      .get<Customer>(this.baseurl + '/customers/' + customerNumber)
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // GET
  GetOrders(customerNumber: string): Observable<Order> {
    return this.http
      .get<Order>(this.baseurl + '/customers/' + customerNumber + '/orders')
      .pipe(retry(1), catchError(this.errorHandl));
  }
  
}
