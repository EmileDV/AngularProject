import { Injectable } from '@angular/core';
import { Movie } from './movie';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable,timer } from 'rxjs';

import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
   constructor(private httpClient: HttpClient) {
  }

  searchMovieDB(searchTerm: string): Observable<any>{
    return this.httpClient.get<any>('https://api.themoviedb.org/3/search/movie', {params: {
      'api_key':'38e0085633676c28e057d5306ca33cab',
      'query':searchTerm,
      'page':'1'
    }});
  }
  getMovies(): Observable<Movie[]> {
        return this.httpClient.get<Movie[]>("http://localhost:3000/movies");
  }
  
  postMovie(movie: Movie): Observable<Movie> {
        let headers = new HttpHeaders();
        headers = headers.set('Content-Type', 'application/json; charset=utf-8');

        return this.httpClient.post<Movie>("http://localhost:3000/movies", movie, {headers: headers});
    }
  
}
