import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HistorySaleModel } from './Models/HistorySaleModel';
import { SaleModel } from './Models/SaleModel';
import * as Highcharts from 'highcharts';

@Injectable()
export class DataService {

  private urlSales = "/api/HistorySale";
  private urlNames = "api/DateGroupType";
  TimePeriod: string = 'Day';
    sales: SaleModel[];
  title = 'app';
  Y1 = 'Sum (In thousands)';
  ColumnLegend = 'Sum $/K';
  LineLegend = 'Sales';
  XArgs: string[];
  Column: number[];
  Line: number[];

  constructor(private http: HttpClient) {
  }

  getSales() {
    this.XArgs = new Array<string>();
    this.Column = new Array<number>();
    this.Line = new Array<number>();
    return this.http.get(this.urlSales + '/' + this.TimePeriod).subscribe((data: SaleModel[]) => {
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
    });;
  }

  getNames() {
    return this.http.get(this.urlNames);
  }
  setTimePeriod(s: string) {
    this.TimePeriod = s;
    this.getSales();
  }

  //createProduct(product: HistorySaleModel) {
  //  return this.http.post(this.url, product);
  //}
  //updateProduct(product: HistorySaleModel) {

  //  return this.http.put(this.url, product);
  //}
  //deleteProduct(id: number) {
  //  return this.http.delete(this.url + '/' + id);
  //}
}
