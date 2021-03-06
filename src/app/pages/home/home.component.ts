import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  currentPage = true;
  mostPopularCurrencies: string[] = [];
  convertedValue!: number;
  requestedAmount!: number;
  constructor() {}

  ngOnInit(): void {}

  topNineCurrencies(data: any): void {
    this.mostPopularCurrencies = data;
  }
  getConvertedValue(convertedValue: number): void {
    this.convertedValue = convertedValue;
  }
  getRequestedAmount(requestedValue: number): void {
    this.requestedAmount = requestedValue;
  }
}
