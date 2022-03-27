import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CreditCardRoutingModule } from './credit-card-routing.module';
import { CreditCardComponent } from './credit-card.component';


@NgModule({
  declarations: [
    CreditCardComponent
  ],
  imports: [
    CommonModule,
    CreditCardRoutingModule,
    FormsModule
  ]
})
export class CreditCardModule { }
