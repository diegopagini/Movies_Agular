import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectMovies } from 'src/app/core/store/selectors/movies.selectors';
import { Result } from 'src/app/modules/home/models/movie.model';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.scss'],
})
export class FavouritesComponent implements OnInit {
  movies$: Observable<Result[]>;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.movies$ = this.store.select(selectMovies);
  }
}
