import { ChartType } from '../../core/models/chartjs.model';

const lineAreaChart: ChartType = {
  labels: [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ],

  datasets: [
    {
      label: 'To',
      fill: true,
      lineTension: 0.5,
      backgroundColor: 'rgba(85, 110, 230, 0.2)',
      borderColor: '#556ee6',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: '#556ee6',
      pointBackgroundColor: '#e9ecef',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: '#556ee6',
      pointHoverBorderColor: '#e9ecef',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [],
    },
    {
      label: 'From',
      fill: true,
      lineTension: 0.5,
      backgroundColor: 'rgba(235, 239, 242, 0.2)',
      borderColor: '#0dcaf0',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: '#0dcaf0',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: '#0dcaf0',
      pointHoverBorderColor: '#0dcaf0',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [],
    },
  ],
  options: {
    defaultFontColor: 'white',
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      xAxes: [
        {
          gridLines: {
            color: 'white',
          },
          title: {
            display: true,
            text: 'Month',
          },
        },
      ],
      yAxes: [
        {
          ticks: {
            max: 100,
            beginAtZero: true,
            stepSize: 10,
          },
          scaleLabel: {
            display: true,
            labelString: 'Date',
          },
          gridLines: {
            color: 'white',
          },
          text: {
            color: 'white',
          },
        },
      ],
    },
  },
};

export { lineAreaChart };
