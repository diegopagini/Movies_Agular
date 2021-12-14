import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Observable } from 'rxjs';
import { Movie } from 'src/app/modules/home/models/movie.model';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  movies$!: Observable<Movie>;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.movies$ = this.apiService.getMovies();
  }

  changePage(event: PageEvent) {
    let page: number;

    if (event.pageIndex <= 0) {
      page = 1;
    } else {
      page = event.pageIndex;
    }
    this.movies$ = this.apiService.getMovies(page.toString());
  }
}
