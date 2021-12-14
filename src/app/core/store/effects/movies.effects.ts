import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { map, Observable, tap } from 'rxjs';
import { createMovie, saveFavourite } from '../actions/movies.actions';
import Swal from 'sweetalert2';

@Injectable()
export class MoviesEffect {
  movieAdded$: Observable<any> = createEffect(
    () =>
      this.action$.pipe(
        ofType(saveFavourite),
        map((action: Action) => action),
        tap((action: any) => {
          Swal.fire({
            position: 'top',
            icon: 'success',
            title: `${action.payload?.title} se agregó a favoritos`,
            showConfirmButton: false,
            timer: 2000,
          });
        })
      ),
    {
      dispatch: false,
    }
  );

  movieCreated$: Observable<any> = createEffect(
    () =>
      this.action$.pipe(
        ofType(createMovie),
        map((action: Action) => action),
        tap((action: any) => {
          Swal.fire({
            position: 'top',
            icon: 'success',
            title: `${action.payload?.title} se creo como pelicula`,
            showConfirmButton: false,
            timer: 2000,
          });
        })
      ),
    {
      dispatch: false,
    }
  );

  constructor(private action$: Actions) {}
}
