import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { ProductLine } from './productline';
import { BaseService } from '../baseservice';
import { Product } from '../products/product';

@Injectable({
  providedIn: 'root'
})
export class ProductlinesService extends BaseService{

  constructor(private http: HttpClient) {
    super();
   }

  // GET
  GetProductLines(): Observable<ProductLine> {
    return this.http
      .get<ProductLine>(this.baseurl + '/productLines/')
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // GET
  GetProductLine(productline: string): Observable<ProductLine> {
    return this.http
      .get<ProductLine>(this.baseurl + '/productLines/' + productline)
      .pipe(retry(1), catchError(this.errorHandl));
  }
  
  // GET
  GetProducts(productline: string): Observable<Product> {
    return this.http
      .get<Product>(this.baseurl + '/productLines/' + productline + '/products')
      .pipe(retry(1), catchError(this.errorHandl));
  }

}
