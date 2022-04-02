import { EnteredAmountService } from './../../core/services/enteredAmount/entered-amount.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  enteredAmount = 1;
  constructor(private currentAmount: EnteredAmountService) {}

  ngOnInit(): void {
    this.getCurrentAmount();
  }

  getCurrentAmount(): void {
    this.currentAmount.enteredAmount.subscribe((res: number) => {
      this.enteredAmount = res;
    });
  }
}
