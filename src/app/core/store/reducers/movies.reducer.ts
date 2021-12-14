import { createReducer, on } from '@ngrx/store';
import { Result } from 'src/app/modules/home/models/movie.model';
import { createMovie, saveFavourite } from '../actions/movies.actions';

interface InitialState {
  movies: Result[];
  customMovies: any[];
}

export const initialState: InitialState = {
  movies: [],
  customMovies: [],
};

export const MoviesReducer = createReducer(
  initialState,
  on(saveFavourite, (state, action) => ({
    ...state,
    movies: [...state.movies, action.payload],
  })),
  on(createMovie, (state, action) => ({
    ...state,
    customMovies: [...state.customMovies, action.payload],
  }))
);
