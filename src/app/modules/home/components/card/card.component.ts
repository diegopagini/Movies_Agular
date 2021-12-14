import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { StoreService } from 'src/app/core/services/store.service';
import { Result } from 'src/app/modules/home/models/movie.model';
import { MovieService } from 'src/app/modules/movie/services/movie.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input()
  movie?: Result;
  @Input()
  isFavourite?: boolean = false;

  constructor(
    private movieService: MovieService,
    private router: Router,
    private storeService: StoreService
  ) {}

  handleClick(movie: Result): void {
    this.movieService.setIsload();
    this.router.navigate([`/movie/${movie.id}`]);
  }

  saveFavourite(movie: Result): void {
    this.storeService.dispatchSaveFavourite(movie);
  }
}
