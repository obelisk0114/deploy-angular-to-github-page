import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GithubFollowersService {

  /// Prevent using
  /// constructor(@Optional() private url: string, private http: HttpClient) { }
  ///
  /// url parameter is not registered in the dependency injection container.
  ///
  /// Should refactor GithubFollowersService to an abstract GithubFollowersServiceBase class and remove the @Injectable() decorator.
  /// And remove GithubFollowersService from the list of providers.
  ///
  /// https://stackoverflow.com/questions/48748066/angular-5-cant-resolve-all-parameters-for-service
  constructor(private http: HttpClient) { }

  getFollowers(link: string): Observable<Object[]> {
    return this.http.get<Object[]>(link).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
        // A client-side or network error occurred. Handle it accordingly.
        errorMessage = `An error occurred: ${err.error.message}`;
    } 
    else {
        // The backend returned an unsuccessful response code.
        // The response body may contain clues as to what went wrong,
        errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    alert(errorMessage);
    return throwError(errorMessage);
  }
}
