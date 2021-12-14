import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieDetailsModule } from './movie-details/movie-details.module';

@NgModule({
  imports: [CommonModule, MovieDetailsModule],
  exports: [MovieDetailsModule],
})
export class ComponentsModule {}
