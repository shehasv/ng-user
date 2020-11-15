import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable,throwError } from 'rxjs';
import { user } from './user';
import { retry,catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private _url = "http://localhost:9000/users"

  constructor(private http: HttpClient) { }

  getUsers(): Observable<user[]>{
    return this.http.get<user[]>(this._url).pipe(
      retry(1),
      catchError(this.handleError)
 
    );
    
  }
  handleError(error) {

    let errorMessage = '';
 
    if (error.error instanceof ErrorEvent) {
 
      // client-side error
 
      errorMessage = `Error: ${error.error.message}`;
 
    } else {
 
      // server-side error
 
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
 
    }
 
    window.alert(errorMessage);
 
    return throwError(errorMessage);
}
}
