import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Result } from 'src/app/modules/home/models/movie.model';
import { MovieService } from 'src/app/modules/movie/services/movie.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() movie: Result | undefined;

  constructor(private movieService: MovieService, private router: Router) {}

  handleClick(movie: Result) {
    this.movieService.setIsload();
    this.router.navigate([`/movie/${movie.id}`]);
  }
}
