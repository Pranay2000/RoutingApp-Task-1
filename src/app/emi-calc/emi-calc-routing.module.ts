import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmiCalcComponent } from './emi-calc.component';

const routes: Routes = [{ path: '', component: EmiCalcComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmiCalcRoutingModule { }
