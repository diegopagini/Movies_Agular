import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieDetailsComponent } from './movie-details.component';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { PipesModule } from 'src/app/core/pipes/pipes.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [MovieDetailsComponent],
  imports: [CommonModule, MaterialModule, PipesModule, RouterModule],
  exports: [MovieDetailsComponent],
})
export class MovieDetailsModule {}
