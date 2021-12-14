import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { selectMovies } from '../../store/selectors/movies.selectors';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  moviesLength$: Observable<number>;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.moviesLength$ = this.store
      .select(selectMovies)
      .pipe(map((movies) => movies.length));
  }
}
