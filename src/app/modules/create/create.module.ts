import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateComponent } from './page/create/create.component';
import { CreateRoutingModule } from './create-routing.module';
import { FormModule } from './components/form/form.module';

@NgModule({
  declarations: [CreateComponent],
  imports: [CommonModule, CreateRoutingModule, FormModule],
  exports: [CreateComponent],
})
export class CreateModule {}
