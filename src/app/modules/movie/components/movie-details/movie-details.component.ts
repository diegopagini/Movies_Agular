import { Component, Input } from '@angular/core';
import { Details } from '../../models/details.model';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss'],
})
export class MovieDetailsComponent {
  @Input() movie: Details;
}
