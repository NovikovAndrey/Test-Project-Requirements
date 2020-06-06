import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { HistorySaleModel } from './Models/HistorySaleModel';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [DataService]
})
export class AppComponent implements OnInit{
  title = 'app';
  sale: HistorySaleModel = new HistorySaleModel();   // изменяемый товар
  sales: HistorySaleModel[];                // массив товаров
  tableMode: boolean = true;    
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.loadSales();    // загрузка данных при старте компонента  
  }

  loadSales() {
    this.dataService.getProducts()
      .subscribe((data: HistorySaleModel[]) => this.sales = data);
  }
  save() {
    if (this.sale.id == null) {
      this.dataService.createProduct(this.sale)
        .subscribe((data: HistorySaleModel) => this.sales.push(data));
    } else {
      this.dataService.updateProduct(this.sale)
        .subscribe(data => this.loadSales());
    }
    this.cancel();
  }
  cancel() {
    this.sale = new HistorySaleModel();
    this.tableMode = true;
  }
  delete(p: HistorySaleModel) {
    this.dataService.deleteProduct(p.id)
      .subscribe(data => this.loadSales());
  }
  add() {
    this.cancel();
    this.tableMode = false;
  }
}
