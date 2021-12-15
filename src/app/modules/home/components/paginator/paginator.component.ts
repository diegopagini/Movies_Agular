import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Observable } from 'rxjs';
import { Movie } from '../../models/movie.model';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss'],
})
export class PaginatorComponent implements OnInit {
  data$!: Observable<Movie>;
  @Output() pageEmitter = new EventEmitter<PageEvent>();

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.data$ = this.apiService.getMovies();
    this.data$.subscribe((data) => console.log('data:', data));
  }

  onChange(event: PageEvent) {
    this.pageEmitter.emit(event);
  }
}
