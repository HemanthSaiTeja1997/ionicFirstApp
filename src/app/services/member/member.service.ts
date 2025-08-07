import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MemberService {
  private baseUrl = 'http://10.46.21.255:3000/members/';


  constructor(private http:HttpClient) { }
  
  apiRequest<T>(
    method: 'GET' | 'POST' | 'PUT' | 'DELETE',
    path: string = '',
    body?: any
  ): Observable<T> {
    const url = `${this.baseUrl}${path}`;
    return this.http
      .request<T>(method, url, { body })
      .pipe(catchError(this.handleError));
  }
  handleError(error: any) {
    console.error('Global Error Handler:', error);
    return throwError(() => error);
  }
}
