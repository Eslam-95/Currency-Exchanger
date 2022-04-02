import { HistoricalRate } from './../../core/models/historicalRate';
import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { HistoricalRatesService } from 'src/app/core/services/historicalRates/historical-rates.service';
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
  constructor(private historicalSerivce: HistoricalRatesService) {}

  ngOnInit(): void {}

  getLastYearAndMonth(): void {
    const lastyear = new Date().getFullYear() - 1;
    for (let i = 0; i < 12; i++) {
      const months = lastyear + '-0' + i;
      this.getLastDayOfMonth(i, lastyear);
    }
  }
  getLastDayOfMonth(date: any, lastyear: number): void {
    const day = new Date(lastyear, date + 1, 0).toISOString().split('T')[0];
    this.getHistoricalDate(day);
  }
  getconvertedFromCurrency(convertedFromValue: string): void {
    this.convertedFromCurrency = convertedFromValue;
    this.lineAreaChart.datasets[0].data = [];
    this.lineAreaChart.datasets[1].data = [];
    this.lineAreaChart.datasets[0].label = convertedFromValue;
    this.getLastYearAndMonth();
  }
  getConvertedToCurrency(convertedToCurrency: string): void {
    this.convertedToCurrency = convertedToCurrency;
    this.lineAreaChart.datasets[1].label = convertedToCurrency;
  }
  getRequestedAmount(requestedValue: number): void {
    this.requestedAmount = requestedValue;
  }

  getHistoricalDate(date: string): void {
    this.historicalSerivce
      .getHistoricalRate(
        date,
        this.convertedFromCurrency,
        this.convertedToCurrency
      )
      .subscribe((rate: HistoricalRate) => {
        this.lineAreaChart.datasets[0].data.push(Object.values(rate.rates)[0]);
        this.lineAreaChart.datasets[1].data.push(Object.values(rate.rates)[1]);
      });
  }
}
