import { createReducer, on } from '@ngrx/store';
import { Result } from 'src/app/modules/home/models/movie.model';
import { saveFavourite } from '../actions/movies.actions';

interface InitialState {
  movies: Result[];
}

export const initialState: InitialState = {
  movies: [],
};

export const MoviesReducer = createReducer(
  initialState,
  on(saveFavourite, (state, action) => ({
    ...state,
    movies: [...state.movies, action.payload],
  }))
);
