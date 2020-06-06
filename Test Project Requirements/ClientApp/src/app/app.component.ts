import { Component, OnInit } from '@angular/core';
//import { DataService } from './data.service';
//import { SaleModel } from './Models/SaleModel';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //providers: [DataService]
})
export class AppComponent /*implements OnInit*/{
  title = 'app';
  //sale: SaleModel = new SaleModel();   // изменяемый товар
  //sales: SaleModel[];                // массив товаров
  //tableMode: boolean = true;    
  //constructor(private dataService: DataService) { }

  //ngOnInit() {
  //  this.loadSales();    // загрузка данных при старте компонента  
  //}

  //loadSales() {
  //  this.dataService.getProducts()
  //    .subscribe((data: SaleModel[]) => this.sales = data);
  //}
  //save() {
  //  if (this.sale.id == null) {
  //    this.dataService.createProduct(this.sale)
  //      .subscribe((data: SaleModel) => this.sales.push(data));
  //  } else {
  //    this.dataService.updateProduct(this.sale)
  //      .subscribe(data => this.loadSales());
  //  }
  //  this.cancel();
  //}
  //cancel() {
  //  this.sale = new SaleModel();
  //  this.tableMode = true;
  //}
  //delete(p: SaleModel) {
  //  this.dataService.deleteProduct(p.id)
  //    .subscribe(data => this.loadSales());
  //}
  //add() {
  //  this.cancel();
  //  this.tableMode = false;
  //}
}
