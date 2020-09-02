import { Component, OnInit } from '@angular/core';
import { BankService } from '../../bank.service';


@Component({
  selector: 'app-teller',
  templateUrl: './teller.component.html',
  styleUrls: ['./teller.component.css']
})
export class TellerComponent implements OnInit {

  value: number;
  transactions = [];

  constructor(public bankService: BankService) { }

  ngOnInit(): void {
  }

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

}
