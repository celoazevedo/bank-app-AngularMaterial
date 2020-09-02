import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class BankService {

  account: any = {
    fname: "Samuel",
    lname: "Azevedo",
    age: 0,
    address: {
      street: "1234 Five st",
      city: "San Diego",
      state: "California",
      zip: 12345,
      country: "USA",
    },
    contactName: "",
    contactEmail: "",
    contactMessage: "",
    balance: 10.0,
    currency: "U$",
    transactions: [
      {
        date: "01-01-01",
        type: "withdrawal",
        amount: 200.0,
        currency: "usd",
      },
      {
        date: "02-02-02",
        type: "deposit",
        amount: 400.0,
        currency: "usd",
      },
      {
        date: "03-03-03",
        type: "withdrawal",
        amount: 2.0,
        currency: "usd",
      },
    ],
  };

  value: number;
  ifWidthdrawl: boolean = false;
  ifDeposite: boolean = false;
  ifBalance: boolean = false;
  ifListTransaction: boolean = false;
  ifHidingWelcome: boolean = true;

  listTransactions = [];

  constructor() { }

  widthdrawl(value: number) {
    let updatedBalance = this.account.balance - value;
    this.account.balance = updatedBalance;
    alert(
      'You widthdrew: ' + value + 'U$' + '\n' +
      'Your current ballance is: ' + updatedBalance
    )

    this.ifWidthdrawl = true;
    this.ifDeposite = false;
    this.ifHidingWelcome = false;
    this.ifBalance = false;
    this.ifListTransaction = false;

    let transactions = this.account.transactions;
    let newTransaction: {
      date: any;
      type: string;
      amount: number;
      currency: string;
    } = {
      date: new Date(),
      type: "Widthdrawl",
      amount: value,
      currency: "usd",
      };

    return transactions.unshift(newTransaction);
  }

  deposite(value: number) {
    let updatedBalance = this.account.balance + value;
    this.account.balance = updatedBalance;
    alert('You deposited: ' + value + 'U$' + '\n' +
    'Your current ballance is: ' + updatedBalance
    )

    this.ifDeposite = true;
    this.ifWidthdrawl = false;
    this.ifHidingWelcome = false;
    this.ifBalance = false;
    this.ifListTransaction = false;

    let transactions = this.account.transactions;
    let newTransaction: {
      date: any;
      type: string;
      amount: number;
      currency: string;
    } = {
      date: new Date(),
      type: "Deposit",
      amount: value,
      currency: "usd",
      };

    return transactions.unshift(newTransaction);
  }

  balance(balance) {
    this.ifBalance = true;
    this.ifDeposite = false;
    this.ifWidthdrawl = false;
    this.ifHidingWelcome = false;
    this.ifListTransaction = false
    return this.account.balance;
  }

  transactions(transactions) {
    this.ifListTransaction = true;
    this.ifBalance = false;
    this.ifDeposite = false;
    this.ifWidthdrawl = false;
    this.ifHidingWelcome = false;
    return this.account.transactions;
  }

}


