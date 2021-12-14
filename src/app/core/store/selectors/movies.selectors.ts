import { createFeatureSelector, createSelector } from '@ngrx/store';

export const selectMovieState = createFeatureSelector<any>('app');

export const selectMovies = createSelector(
  selectMovieState,
  (app) => app.movies
);

export const selectLoading = createSelector(
  selectMovieState,
  (app) => app.loading
);

export const selectCustomMovies = createSelector(
  selectMovieState,
  (app) => app.customMovies
);
