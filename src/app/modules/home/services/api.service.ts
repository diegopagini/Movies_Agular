import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, Observable, shareReplay } from 'rxjs';
import { Movie } from 'src/app/modules/home/models/movie.model';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getMovies(page: string = '3'): Observable<any> {
    return this.http
      .get<any>(`/movie/now_playing?page=${page}`)
      .pipe(delay(1500));
  }
}
