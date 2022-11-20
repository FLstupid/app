import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from '../models/Movie';
import { environment } from './../../environments/environment';
import { Observable } from 'rxjs';

@Injectable()
export class MovieService {
  resource: string;
  resourceURL: string;
  idMovie?: string;

  constructor(private http: HttpClient) {
    this.resource = 'movies';
    this.resourceURL = `${environment.apiBaseURL}${this.resource}`;
  }
  //this is to get the movies
  get_Movies(): Observable<Array<Movie>> {
    return this.http.get<Array<Movie>>(this.resourceURL);
  }
  //get single movie
  get_single_Movie(movieId: string): Observable<Movie> {
    this.idMovie = movieId;
    console.log(`${this.resourceURL}/${this.idMovie}`);
    console.log(`${this.resourceURL}/${this.idMovie}`);
    return this.http.get<Movie>(`${this.resourceURL}/${this.idMovie}`);
  }
}
