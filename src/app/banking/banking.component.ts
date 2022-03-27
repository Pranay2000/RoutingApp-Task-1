import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banking',
  templateUrl: './banking.component.html',
  styleUrls: ['./banking.component.css']
})
export class BankingComponent implements OnInit {
  initial: any = '';
  deposited_amt: any = '';
  withdraw_amt: any = '';
  total: number = 0;

  createAccount() {
    if(this.initial <= 5000) {
      alert("Minimum 5000 Rs. are required to create account");
    } else {
      this.total = this.initial;
      alert("Account has been created");
    }
  }

  withdraw() {
    if(this.withdraw_amt < this.total) {
      this.total = this.total - this.withdraw_amt;
      alert("Amount has been withdrawn");
    } else {
      alert("Insufficient Balance in Account");
    }
  }

   deposit() {
     let total_amount = this.total;
     let deposited = this.deposited_amt;
     let balanceAmount = Number(total_amount) + Number(deposited);
     if(deposited == ''){
        alert("Amount is empty plz enter correct input ");
      } else{
        this.total = balanceAmount;
        alert("Amount has been added");
      }
  }

  constructor() { }

  ngOnInit(): void {
  }
}
