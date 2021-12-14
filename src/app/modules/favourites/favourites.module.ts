import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavouritesRoutingModule } from './favourites-routing.module';
import { FavouritesComponent } from './page/favourites/favourites.component';
import { CardModule } from '../home/components/card/card.module';

@NgModule({
  declarations: [FavouritesComponent],
  imports: [CommonModule, FavouritesRoutingModule, CardModule],
  exports: [FavouritesComponent],
})
export class FavouritesModule {}
