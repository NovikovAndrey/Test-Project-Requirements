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
}
//product: Product = new Product();   // изменяемый товар
//products: Product[];                // массив товаров
//tableMode: boolean = true;          // табличный режим



//ngOnInit() {
//  this.loadProducts();    // загрузка данных при старте компонента  
//}
//// получаем данные через сервис
//loadProducts() {
//  this.dataService.getProducts()
//    .subscribe((data: Product[]) => this.products = data);
//}
//// сохранение данных
//save() {
//  if (this.product.id == null) {
//    this.dataService.createProduct(this.product)
//      .subscribe((data: Product) => this.products.push(data));
//  } else {
//    this.dataService.updateProduct(this.product)
//      .subscribe(data => this.loadProducts());
//  }
//  this.cancel();
//}
//editProduct(p: Product) {
//  this.product = p;
//}
//cancel() {
//  this.product = new Product();
//  this.tableMode = true;
//}
//delete (p: Product) {
//  this.dataService.deleteProduct(p.id)
//    .subscribe(data => this.loadProducts());
//}
//add() {
//  this.cancel();
//  this.tableMode = false;
//}
