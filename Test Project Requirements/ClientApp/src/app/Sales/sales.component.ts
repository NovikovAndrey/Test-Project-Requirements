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
  XArgs: string[] = new Array<string>();
  Column: number[] = new Array<number>();
  Line: number[] = new Array<number>();

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.loadSales();    // загрузка данных при старте компонента  
  }

  public loadSales() {
    this.dataService.getSales()
      .subscribe((data: SaleModel[]) => {
        this.sales = data;
        for (var i = 0, len = this.sales.length; i < len; i++) {
          this.XArgs[i] = this.sales[i].dateSale.toString();
          this.Column[i] = +(this.sales[i].amountDollars / 1000).toFixed(2);
          this.Line[i] = this.sales[i].sale;
        }
        Highcharts.chart('SalesChart', {
          chart: { zoomType: 'xy' },
          title: { text: this.title },
          xAxis: { categories: this.XArgs, crosshair: true },
          yAxis: [
            { // Primary yAxis
              title: {
                text: this.Y1,
                style: {
                  color: Highcharts.getOptions().colors[1]
                }
              }
            },
            { // Secondary yAxis
              title: {
                text: '',
                style: {
                  color: Highcharts.getOptions().colors[0]
                }
              },
              labels: {
                style: {
                  color: Highcharts.getOptions().colors[0]
                }
              },
              opposite: true
            }
          ],
          legend: {
            layout: 'vertical',
            align: 'right',
            x: -100,
            verticalAlign: 'top',
            y: 0,
            floating: true
          },
          series: [
            {
              name: this.ColumnLegend,
              type: 'column',
              data: this.Column,
            },
            {
              name: this.LineLegend,
              type: 'spline',
              yAxis: 1,
              data: this.Line,
            }
          ],
          tooltip: {
            shared: true
          }
        });
      });
  }
  
}
