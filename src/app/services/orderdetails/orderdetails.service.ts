import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { OrderDetail } from './orderdetail';
import { BaseService } from '../baseservice';

@Injectable({
  providedIn: 'root'
})
export class OrderdetailsService extends BaseService{

  constructor(private http: HttpClient) {
    super();
   }

  // GET
  GetOrderDetails(): Observable<OrderDetail> {
    return this.http
      .get<OrderDetail>(this.baseurl + '/orderDetails/')
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // GET
  GetOrderDetail(orderNumber: string, productCode: string): Observable<OrderDetail> {
    return this.http
      .get<OrderDetail>(this.baseurl + '/orderDetails/' + orderNumber + "/" + productCode)
      .pipe(retry(1), catchError(this.errorHandl));
  }
  
}
