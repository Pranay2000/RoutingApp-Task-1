import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { EmiCalcRoutingModule } from './emi-calc-routing.module';
import { EmiCalcComponent } from './emi-calc.component';


@NgModule({
  declarations: [
    EmiCalcComponent
  ],
  imports: [
    CommonModule,
    EmiCalcRoutingModule,
    FormsModule
  ]
})
export class EmiCalcModule { }
