import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { BaseService } from '../baseservice';
import { Office } from './office';
import { OfficeError } from './officeerror';
import { Employee } from '../employees/employee';

@Injectable({
  providedIn: 'root'
})
export class OfficesService extends BaseService{

  // https://www.positronx.io/angular-httpclient-http-tutorial-build-consume-restful-api/

  data: any;
  errorMessage: string = '';

  constructor(private http: HttpClient) {
    super();
   }

  // GET
  GetOffices(): Observable<Office> {
    return this.http
      .get<Office>(this.baseurl + '/offices/')
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // GET
  GetOffice(officeCode: string): Observable<Office> {
    return this.http
      .get<Office>(this.baseurl + '/offices/' + officeCode)
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // GET
  GetEmployees(officeCode: string): Observable<Employee> {
    return this.http
      .get<Employee>(this.baseurl + '/offices/' + officeCode + '/employees')
      .pipe(retry(1), catchError(this.errorHandl));
  }
  
  // PUT (Edit)
  PutOffice(office: Office): Observable<Office> {    
    console.log('PutOffice 4');
    const request = this.baseurl + '/offices/' + office.officeCode;
    console.log('request=' + request);
    console.log('office=' + JSON.stringify(office));

    return this.http
      .put<Office>(request, office)
      .pipe(retry(1), catchError(this.errorHandl2));          
  }

  // POST (New)
  PostOffice(office: Office): Observable<Office> {    
    console.log('PostOffice 4');
    const request = this.baseurl + '/offices';
    console.log('request=' + request);
    console.log('office=' + JSON.stringify(office));

    return this.http
      .post<Office>(request, office)      
      .pipe(retry(1), catchError(this.errorHandl2));
    }

  // DELETE (New)
  DeleteOffice(office: Office): Observable<any> {    
    console.log('DeleteOffice 4');
    const request = this.baseurl + '/offices/' + office.officeCode;
    console.log('request=' + request);

    return this.http
      .delete(request)      
      .pipe(retry(1), catchError(this.errorHandl2));
    }
    
  // Error handling
  errorHandl2(error: any) {
    let errorMessage = new OfficeError();
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = new OfficeError(error.error.message);
    } else {
      // Get server-side error
      errorMessage = new OfficeError(error.error.message, error.error.errors);
    }
    console.log(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  }

}
