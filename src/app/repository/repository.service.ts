import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { IRepository } from './repository';

@Injectable()
export class RepositoryService {

  private _repositoryUrl = 'https://api.github.com/repositories';

  constructor(private _http: HttpClient) { }

  getRepositories(): Observable<IRepository[]> {
    return this._http.get<IRepository[]>(this._repositoryUrl)
    .pipe(
      map(data => {
        return data.map(el => ({
          id: el.id,
          name: el.name,
          description: el.description,
          html_url: el.html_url,
          clone_url: el.clone_url,
          language: el.language
        }))
      }),
      catchError(this.handleError)
    );
  }

  private handleError(err: HttpErrorResponse) {
    console.log(err.message);
    return throwError(err.message);
  }
}
