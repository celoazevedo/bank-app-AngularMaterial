import { Component, OnInit } from '@angular/core';
import { BankService } from '../../bank.service';


@Component({
  selector: 'app-teller',
  templateUrl: './teller.component.html',
  styleUrls: ['./teller.component.css']
})
export class TellerComponent implements OnInit {

  value: number;

  constructor(public bankService: BankService) { }

  ngOnInit(): void {
  }

}
