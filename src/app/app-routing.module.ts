import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieGuard } from './core/guards/guards.guard';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./modules/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'movie/:id',
    loadChildren: () =>
      import('./modules/movie/movie.module').then((m) => m.MovieModule),
    canActivate: [MovieGuard],
  },
  {
    path: 'favourites',
    loadChildren: () =>
      import('./modules/favourites/favourites.module').then(
        (m) => m.FavouritesModule
      ),
  },
  {
    path: 'create',
    loadChildren: () =>
      import('./modules/create/create.module').then((m) => m.CreateModule),
  },
  {
    path: '**',
    loadChildren: () =>
      import('./modules/not-found/not-found.module').then(
        (m) => m.NotFoundModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
