import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-credit-card',
  templateUrl: './credit-card.component.html',
  styleUrls: ['./credit-card.component.css']
})
export class CreditCardComponent implements OnInit {

  salary: number = 0;
  total: string = '';
  calculate() {
    if(this.salary < 20000) {
      this.total = "You are not Eligible for Credit Card";
    } else if(this.salary >= 20000 && this.salary < 30000) {
      this.total = "You are Eligible for Silver Card";
    } else if(this.salary >= 30000 && this.salary < 40000) {
      this.total = "You are Eligible for Gold Card";
    } else {
      this.total = "You are eligible for Platinum Card";
    }

  }

  constructor() { }

  ngOnInit(): void {
  }

}
