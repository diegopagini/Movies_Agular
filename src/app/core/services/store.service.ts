import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Result } from 'src/app/modules/home/models/movie.model';
import { createMovie, saveFavourite } from '../store/actions/movies.actions';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  constructor(private store: Store) {}

  dispatchSaveFavourite(payload: Result): void {
    this.store.dispatch(saveFavourite({ payload }));
  }

  dispatchCreateMovie(payload: any): void {
    this.store.dispatch(createMovie({ payload }));
  }
}
