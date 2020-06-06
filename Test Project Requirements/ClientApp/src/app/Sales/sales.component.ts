import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { DataService } from '../data.service';
import { SaleModel } from '../Models/SaleModel';

@Component({
  selector: 'app-Highcharts',
  templateUrl: './sales.component.html',
  providers: [DataService]

})
export class SaleHighchartsComponent implements OnInit{
  sale: SaleModel = new SaleModel();   // изменяемый товар
  sales: SaleModel[];                // массив товаров
  tableMode: boolean = true;
  title = 'app';
  Y1 = 'Sum (In thousands)';
  ColumnLegend = 'Sum $/K';
  LineLegend = 'Sales';
  highcharts = Highcharts;
  XArgs: string[];
  Column: number[];
  Line: number[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.loadSales();    // загрузка данных при старте компонента  
  }

  loadSales() {
    this.dataService.getProducts()
      .subscribe((data: SaleModel[]) => this.sales = data);
    this.XArgs = new Array<string>()
    this.Column = new Array<number>();
    this.Line = new Array<number>();
    for (var i = 0, len = this.sales.length; i < len; i++) {
      this.XArgs[i] = this.sales[i].dateSale.toString();
      this.Column[i] = +(this.sales[i].amountDollars / 1000).toFixed(2);
      this.Line[i] = this.sales[i].sale;
    }
  }
  chartOptions = {
    chart: {
      zoomType: 'xy'
    },
    title: {
      text: 'Source: WorldClimate.com'
    },
    subtitle: {
      text: 'Average Monthly Temperature and Rainfall in Tokyo'
    },
    xAxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      crosshair: true
    },
    yAxis: [
      { // Primary yAxis
        labels: {
          format: '{value}\xB0C',
          style: {
            color: Highcharts.getOptions().colors[1]
          }
        },
        title: {
          text: 'Temperature',
          style: {
            color: Highcharts.getOptions().colors[1]
          }
        }
      },
      { // Secondary yAxis
        title: {
          text: 'Rainfall',
          style: {
            color: Highcharts.getOptions().colors[0]
          }
        },
        labels: {
          format: '{value} mm',
          style: {
            color: Highcharts.getOptions().colors[0]
          }
        },
        opposite: true
      }
    ],
    tooltip: {
      shared: true
    },
    legend: {
      layout: 'vertical',
      align: 'left',
      x: 60,
      verticalAlign: 'top',
      y: 100,
      floating: true
      //,

      //backgroundColor: (
      //  Highcharts.theme && Highcharts.theme.legendBackgroundColor)
      //  || '#FFFFFF'
    },
    series: [
      {
        name: 'Rainfall',
        type: 'column',
        yAxis: 1,
        data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5,
          216.4, 194.1, 95.6, 54.4],
        tooltip: {
          valueSuffix: ' mm'
        }
      },
      {
        name: 'Temperature',
        type: 'spline',
        data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6],
        tooltip: {
          valueSuffix: '\xB0C'
        }
      }
    ]
  };
}
