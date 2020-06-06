import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HistorySaleModel } from './Models/HistorySaleModel';

@Injectable()
export class DataService {

  private url = "/api/HistorySale";

  constructor(private http: HttpClient) {
  }

  getProducts() {
    return this.http.get(this.url);
  }

  getProduct(id: number) {
    return this.http.get(this.url + '/' + id);
  }

  createProduct(product: HistorySaleModel) {
    return this.http.post(this.url, product);
  }
  updateProduct(product: HistorySaleModel) {

    return this.http.put(this.url, product);
  }
  deleteProduct(id: number) {
    return this.http.delete(this.url + '/' + id);
  }
}
