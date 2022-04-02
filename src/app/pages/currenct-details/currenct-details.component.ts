import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { lineAreaChart } from './data';

@Component({
  selector: 'app-currenct-details',
  templateUrl: './currenct-details.component.html',
  styleUrls: ['./currenct-details.component.scss'],
})
export class CurrenctDetailsComponent implements OnInit {
  currentPage = false;
  lineAreaChart = lineAreaChart;

  convertedFromCurrency!: string;
  convertedToCurrency!: string;
  requestedAmount = 1;

  constructor() {}

  ngOnInit(): void {
    this.getLastYearAndMonth();
  }

  getLastYearAndMonth(): void {
    const lastyear = new Date().getFullYear() - 1;
    for (let i = 0; i < 12; i++) {
      const months = lastyear + '-0' + i;
      this.getLastDayOfMonth(i);
    }
  }
  getLastDayOfMonth(date: any): void {
    const day = new Date(2021, date + 1, 0).toISOString().split('T')[0];
    console.log(day);
  }
  getconvertedFromCurrency(convertedFromValue: string): void {
    this.convertedFromCurrency = convertedFromValue;
  }
  getConvertedToCurrency(convertedToCurrency: string): void {
    this.convertedToCurrency = convertedToCurrency;
  }
  getRequestedAmount(requestedValue: number): void {
    this.requestedAmount = requestedValue;
  }
}
