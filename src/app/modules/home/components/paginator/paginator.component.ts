import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Movie } from '../../models/movie.model';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss'],
})
export class PaginatorComponent {
  @Input() data: Movie | undefined;
  @Output() pageEmitter = new EventEmitter<PageEvent>();

  onChange(event: PageEvent) {
    // console.log(event);
    this.pageEmitter.emit(event);
  }
}
