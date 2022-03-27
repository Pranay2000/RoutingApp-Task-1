import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'form', loadChildren: () => import('./form/form.module').then(m => m.FormModule) }, 
  { path: 'banking', loadChildren: () => import('./banking/banking.module').then(m => m.BankingModule) }, 
  { path: 'credit-card', loadChildren: () => import('./credit-card/credit-card.module').then(m => m.CreditCardModule) }, 
  { path: 'emi-calc', loadChildren: () => import('./emi-calc/emi-calc.module').then(m => m.EmiCalcModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
