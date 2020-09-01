import { Component, OnInit } from '@angular/core';
import { BankService } from '../../bank.service';
// import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-atm-home',
  templateUrl: './atm-home.component.html',
  styleUrls: ['./atm-home.component.css']
})
export class AtmHomeComponent implements OnInit {

  amount: number;
  widthdrawl: boolean = false;
  deposite: boolean = false;

  constructor(public bankService: BankService) { }

  onWidthdrawl() {
    this.bankService.widthdrawl(this.amount);
    this.widthdrawl = true;
    console.log(this.amount)
  }

  onDeposite() {
    this.bankService.deposite(this.amount);
    this.deposite = true;
    console.log(this.amount)
  }

  ngOnInit(): void {
  }

}
