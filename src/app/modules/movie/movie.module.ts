import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieComponent } from './page/movie/movie.component';
import { MovieRoutingModule } from './movie-routing.module';
import { ComponentsModule } from './components/components.module';

@NgModule({
  declarations: [MovieComponent],
  imports: [CommonModule, MovieRoutingModule, ComponentsModule],
  exports: [MovieComponent],
})
export class MovieModule {}
