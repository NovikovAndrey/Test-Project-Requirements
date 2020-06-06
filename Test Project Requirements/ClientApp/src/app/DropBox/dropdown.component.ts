import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { SaleHighchartsComponent } from '../Sales/sales.component';

@Component({
  selector: 'ngbd-dropdown',
  templateUrl: './dropdown.component.html',
  providers: [DataService]
})
export class NgbdDropdown implements OnInit{
  names: string[];
  comp: SaleHighchartsComponent;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.loadNames();    // загрузка данных при старте компонента  
  }

  loadNames() {
    this.dataService.getNames()
      .subscribe((data: string[]) => {
        this.names = data;
      }
      )
  };

  GetGroup() {
    this.dataService.testSales() /*{this.dataService.getSales()}*/
  };
}
