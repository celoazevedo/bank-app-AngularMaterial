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
  widthdrawl: boolean = false;
  deposite: boolean = false;
  balance: boolean = false;
  listTransaction: boolean = false;
  hidingWelcome: boolean = true;

  transactions = [];

  constructor(public bankService: BankService) { }

  onWidthdrawl() {
    this.bankService.widthdrawl(this.value);
    this.widthdrawl = true;
    this.hidingWelcome = false;
  }

  onDeposite() {
    this.bankService.deposite(this.value);
    this.deposite = true;
    this.hidingWelcome = false;
  }

  checkBalance() {
    this.bankService.balance(this.balance);
    this.balance = true;
    this.hidingWelcome = false;
  }

  transactionList() {
    let transactionList = this.bankService.transactions(this.listTransaction);
    this.listTransaction = true;
    this.hidingWelcome = false;
    return transactionList;
  }

  ngOnInit(): void {
  }

}
