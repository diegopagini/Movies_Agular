import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getMovies(page: string = '10'): Observable<any> {
    return this.http
      .get<any>(`/movie/now_playing?page=${page}`)
      .pipe(delay(1500));
  }
}
