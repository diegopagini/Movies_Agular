import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { MovieService } from '../../modules/movie/services/movie.service';

@Injectable({
  providedIn: 'root',
})
export class MovieGuard implements CanActivate {
  constructor(private movieService: MovieService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (this.movieService.isLoaded) {
      return true;
    } else {
      this.router.navigate(['/home']);
      return false;
    }
  }
}
