import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieComponent } from './page/movie/movie.component';
import { MovieRoutingModule } from './movie-routing.module';

@NgModule({
  declarations: [MovieComponent],
  imports: [CommonModule, MovieRoutingModule],
  exports: [MovieComponent],
})
export class MovieModule {}
