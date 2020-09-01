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

  constructor() { }

  widthdrawl(amount: number) {
    let updatedBalance = this.account.balance - amount;
    this.account.balance = updatedBalance;
    alert(
      'You widthdrew: ' + amount + 'U$' + '\n' +
      'Your current ballance is: ' + updatedBalance
    )
  }

  deposite(amount: number) {
    let updatedBalance = this.account.balance + amount;
    this.account.balance = updatedBalance;
    alert('You deposited: ' + amount + 'U$' + '\n' +
    'Your current ballance is: ' + updatedBalance
    )
  }

  balance(balance) {
    return this.account.balance;
  }

  transactions(transactions) {
    return this.account.transactions;
  }


}


