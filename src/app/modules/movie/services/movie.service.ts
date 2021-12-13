import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Details } from '../models/details.model';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private isLoad: boolean = false;

  constructor(private http: HttpClient) {}

  getMovie(id: number): Observable<Details> {
    return this.http.get<Details>(`/movie/${id}`);
  }

  setIsload() {
    this.isLoad = true;
  }

  get isLoaded(): boolean {
    return this.isLoad;
  }
}
