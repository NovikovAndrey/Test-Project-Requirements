import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HistorySaleModel } from './Models/HistorySaleModel';

@Injectable()
export class DataService {

  private urlSales = "/api/HistorySale";
  private urlNames = "api/DateGroupType";

  constructor(private http: HttpClient) {
  }

  getSales() {
    return this.http.get(this.urlSales);
  }

  getNames() {
  return this.http.get(this.urlNames);
  }

  testSales() {
    return this.http.get(this.urlSales);
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
