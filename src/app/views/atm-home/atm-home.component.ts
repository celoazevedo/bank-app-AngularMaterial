import { Component, OnInit } from '@angular/core';
import { BankService } from '../../bank.service';
// import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-atm-home',
  templateUrl: './atm-home.component.html',
  styleUrls: ['./atm-home.component.css']
})
export class AtmHomeComponent implements OnInit {

  value: number;

  transactions = [];

  constructor(public bankService: BankService) { }

  onWidthdrawl() {
    this.bankService.widthdrawl(this.value);
  }

  onDeposite() {
    this.bankService.deposite(this.value);
  }

  checkBalance() {
    this.bankService.balance(this.value);
  }

  transactionList() {
    let transactionList = this.bankService.transactions(this.transactions);
    return transactionList;
  }

  ngOnInit(): void {
  }

}
