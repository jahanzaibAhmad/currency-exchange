import { Component, Input, OnChanges, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { ConstantService } from 'src/app/shared/constant.service';
import { CurrencyExchangeService } from '../shared/currency-exchange.service';

@Component({
  selector: 'app-currency-detail',
  templateUrl: './currency-detail.component.html',
  styleUrls: ['./currency-detail.component.scss']
})
export class CurrencyDetailComponent implements OnInit, OnChanges {

  /** Dates are hard coded, may use date picker depends on requirement
   * Its a sample chart we can use different chart for showing results
   */

  @Input() fromCurrency: string = '';
  @Input() toCurrency: string = '';
  @ViewChild(BaseChartDirective) chart?: BaseChartDirective;

  public lineChartData: ChartConfiguration['data'] = {
    datasets: [
      {
        data: [  ],
        label: this.toCurrency,
        backgroundColor: 'rgba(148,159,177,0.2)',
        borderColor: 'rgba(148,159,177,1)',
        pointBackgroundColor: 'rgba(148,159,177,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(148,159,177,0.8)',
        fill: 'origin',
      }
    ],
    labels: [  ]
  };

  public lineChartOptions: ChartConfiguration['options'] = {
    elements: {
      line: {
        tension: 0.5
      }
    },
    scales: {
      // We use this empty structure as a placeholder for dynamic theming.
      y:
        {
          position: 'left',
        },
      y1: {
        position: 'right',
        grid: {
          color: 'rgba(255,0,0,0.3)',
        },
        ticks: {
          color: 'red'
        }
      }
    },
  };

  public lineChartType: ChartType = 'line';

  constructor(
    private currencyExchangeService: CurrencyExchangeService,
    public constantService: ConstantService
  ) { 


  }

  ngOnInit(): void {
  }


  ngOnChanges(): void {
    this.getChart();
  }

  getChart() {
    this.currencyExchangeService.getChart(this.toCurrency, this.fromCurrency).subscribe(
      data => {
        console.log(data);
        let lineData: number[] = [];
        let labels: string[] = [];
        Object.keys(data.rates).forEach(key => {
          console.log(key);
          console.log(data[key]);
          const val = data.rates[key][this.toCurrency];
          lineData = [...lineData, val];
          labels = [...labels, key];
        });
        this.setLineData(lineData, labels);

      });
  }

  setLineData(lineData: number[], labels: string[]) {
    this.lineChartData.datasets[0].data = lineData;
    this.lineChartData.datasets[0].label = this.toCurrency;
    this.lineChartData.labels = labels;
    this.chart?.update();
  }

  

}
