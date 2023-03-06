import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { Order } from './order';
import { BaseService } from '../baseservice';
import { OrderDetail } from '../orderdetails/orderdetail';

@Injectable({
  providedIn: 'root'
})
export class OrdersService extends BaseService{

  constructor(private http: HttpClient) {
    super();
   }

  // GET
  GetOrders(): Observable<Order> {
    return this.http
      .get<Order>(this.baseurl + '/orders/')
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // GET
  GetOrder(orderNumber: string): Observable<Order> {
    return this.http
      .get<Order>(this.baseurl + '/orders/' + orderNumber)
      .pipe(retry(1), catchError(this.errorHandl));
  }

    // GET
    GetOrderDetails(orderNumber: string): Observable<OrderDetail> {
      return this.http
        .get<OrderDetail>(this.baseurl + '/orders/' + orderNumber + '/orderDetails')
        .pipe(retry(1), catchError(this.errorHandl));
    }
  
  
}
