import { Component, OnInit } from '@angular/core';
import { lineAreaChart } from './data';

@Component({
  selector: 'app-currenct-details',
  templateUrl: './currenct-details.component.html',
  styleUrls: ['./currenct-details.component.scss'],
})
export class CurrenctDetailsComponent implements OnInit {
  lineAreaChart = lineAreaChart;

  constructor() {}

  ngOnInit(): void {}
}
