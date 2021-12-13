import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginatorComponent } from './paginator.component';
import { MaterialModule } from 'src/app/shared/material/material.module';

@NgModule({
  declarations: [PaginatorComponent],
  imports: [CommonModule, MaterialModule],
  exports: [PaginatorComponent],
})
export class PaginatorModule {}
