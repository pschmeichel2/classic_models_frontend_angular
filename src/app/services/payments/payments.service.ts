import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { Payment } from './payment';
import { BaseService } from '../baseservice';

@Injectable({
  providedIn: 'root'
})
export class PaymentsService extends BaseService{

  constructor(private http: HttpClient) {
    super();
   }

  // GET
  GetPayments(): Observable<Payment> {
    return this.http
      .get<Payment>(this.baseurl + '/payments/')
      .pipe(retry(1), catchError(this.errorHandl));
  }

  GetPayment(customerNumber: string, checkNumber: string): Observable<Payment> {
    return this.http
      .get<Payment>(this.baseurl + '/payments/' + customerNumber + '/' + checkNumber)
      .pipe(retry(1), catchError(this.errorHandl));
  }

}
