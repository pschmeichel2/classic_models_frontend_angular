import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { Product } from './product';
import { BaseService } from '../baseservice';
import { OrderDetail } from '../orderdetails/orderdetail';

@Injectable({
  providedIn: 'root'
})
export class ProductsService extends BaseService{

  constructor(private http: HttpClient) {
    super();
   }

  // GET
  GetProducts(): Observable<Product> {
    return this.http
      .get<Product>(this.baseurl + '/products/')
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // GET
  GetProduct(productCode: string): Observable<Product> {
    return this.http
      .get<Product>(this.baseurl + '/products/' + productCode)
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // GET
  GetOrderDetails(productCode: string): Observable<OrderDetail> {
    return this.http
      .get<OrderDetail>(this.baseurl + '/products/' + productCode + '/orderDetails')
      .pipe(retry(1), catchError(this.errorHandl));
  }
  
}
