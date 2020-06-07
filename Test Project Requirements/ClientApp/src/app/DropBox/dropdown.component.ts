import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { DataService } from '../data.service';
import { SaleHighchartsComponent } from '../Sales/sales.component';

@Component({
  selector: 'ngbd-dropdown',
  templateUrl: './dropdown.component.html',
//  template: `<p>dsfsdfsdfs</p><div class="row">
//    <div class="col">
//      <div ngbDropdown class="d-inline-block">
//        <button class="btn btn-outline-primary" id="dropdown"
//                ngbDropdownToggle>
//          {{ selectedValue.value || "Select Environment" }}
//        </button>
//        <div ngbDropdownMenu aria-labelledby="dropdown" #selectedValue>
//          <div *ngFor="let name of names;">
//            <button ngbDropdownItem id="option" on-click="GetGroup(selectedValue.value)" (click)="GetGroup(selectedValue.value)">
//              {{name}}
//            </button>
//          </div>
//        </div>
//      </div>
//    </div>`,
////`<button (click)="change(true)"> +</button>
////  //  < button(click)="change(false)"> -</button>`
  providers: [DataService]
})
export class NgbdDropdown implements OnInit{
  names: string[];
  comp: SaleHighchartsComponent;
  count: string;
  @Output() onChanged = new EventEmitter<string>();

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

  public GetGroup(increased: string) {
  /* this.onChanged.emit(increased);*/
    this.dataService.getSales(increased)
    //this.onChanged.emit(increased);
    this.count = increased;
  };
}
