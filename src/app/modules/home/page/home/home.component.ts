import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Store } from '@ngrx/store';
import { combineLatest, map, Observable, pluck } from 'rxjs';
import { selectCustomMovies } from 'src/app/core/store/selectors/movies.selectors';
import { Movie } from 'src/app/modules/home/models/movie.model';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  movies$: Observable<any>;

  constructor(private apiService: ApiService, private store: Store) {}

  ngOnInit(): void {
    this.movies$ = combineLatest(
      this.apiService.getMovies().pipe(pluck('results')),
      this.store.select(selectCustomMovies)
    ).pipe(map(([s1, s2]) => [...s1, ...s2]));
  }

  changePage(event: PageEvent) {
    let page: number;

    if (event.pageIndex <= 0) {
      page = 1;
    } else {
      page = event.pageIndex;
    }
    this.movies$ = combineLatest(
      this.apiService.getMovies(page.toString()).pipe(pluck('results')),
      this.store.select(selectCustomMovies)
    ).pipe(map(([s1, s2]) => [...s1, ...s2]));
  }
}
