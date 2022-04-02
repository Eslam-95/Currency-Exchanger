import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  currentPage = true;
  mostPopularCurrencies: string[] = [];
  convertedValue = 1;
  requestedAmount = 1;
  constructor() {}

  ngOnInit(): void {}

  topNineCurrencies(data: any): void {
    this.mostPopularCurrencies.push(...[data]);
  }
  getConvertedValue(convertedValue: number): void {
    this.convertedValue = convertedValue;
  }
  getRequestedAmount(requestedValue: number): void {
    this.requestedAmount = requestedValue;
  }
}
