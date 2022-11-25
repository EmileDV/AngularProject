import { Injectable } from '@angular/core';
import { Movie } from './movie';

import { HttpClient } from '@angular/common/http';
import { Observable,timer } from 'rxjs';

import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
   constructor(private httpClient: HttpClient) {
  }

  getMovies(): Observable<Movie[]> {
     return timer(1, 3000).pipe(switchMap(() => this.httpClient.get<Movie[]>("http://localhost:3000/articles")));
  }

  getMovieById(id: number): Observable<Movie> {
    return this.httpClient.get<Movie>("http://localhost:3000/movies/" + id);
  }
}
