import { Component, Input } from '@angular/core';
import { Result } from 'src/app/core/models/movie.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() movie: Result | undefined;
}
