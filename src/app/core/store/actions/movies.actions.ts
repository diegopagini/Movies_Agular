import { createAction, props } from '@ngrx/store';
import { Result } from 'src/app/modules/home/models/movie.model';

export const saveFavourite = createAction(
  '[Movie Card] Save favorite',
  props<{ payload: Result }>()
);

export const createMovie = createAction(
  '[Create Movie] Create a movie',
  props<{ payload: any }>()
);
