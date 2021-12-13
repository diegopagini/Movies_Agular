import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './page/home/home.component';
import { HomeRoutingModule } from './home-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { CardModule } from './components/card/card.module';
import { SharedComponentsModule } from 'src/app/shared/components/components.module';
import { PaginatorModule } from './components/paginator/paginator.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    HttpClientModule,
    CardModule,
    PaginatorModule,
    SharedComponentsModule,
  ],
  exports: [HomeComponent],
})
export class HomeModule {}
