import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, Observable, shareReplay } from 'rxjs';
import { Movie } from 'src/app/modules/home/models/movie.model';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  page = 0;

  constructor(private http: HttpClient) {}

  getMovies(page: string = '3'): Observable<Movie> {
    return this.http
      .get<Movie>(`/movie/now_playing?page=${page}`)
      .pipe(delay(1500));
  }
}
