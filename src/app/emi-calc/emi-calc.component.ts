import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emi-calc',
  templateUrl: './emi-calc.component.html',
  styleUrls: ['./emi-calc.component.css']
})
export class EmiCalcComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  amount: number = 0;
  roi: number = 0;
  tenure: number = 0;
  total_emi: number = 0;
  months: number = 0;
  totalAmt: number = 0;
  totalInt: number = 0;
  funcrate:number=0;
  cmpdnum:number=0;
  cmpddeno:number=0;
  
  calculateEMI() {
    this.months = this.roi/1200;
    this.funcrate = 1 + this.months;
    this.cmpdnum = Math.pow(this.funcrate,this.tenure);
    this.cmpddeno = Math.pow(this.funcrate,this.tenure) - 1;
    this.total_emi = this.amount * this.months * (this.cmpdnum/this.cmpddeno);
    this.totalAmt = this.total_emi * 12;
    this.totalInt = this.totalAmt - this.amount
  }
}
