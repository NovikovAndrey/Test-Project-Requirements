import { Component } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngbd-datepicker',
  templateUrl: './datepicker.component.html'
})
export class NgbdDatepickerPopup {
  model: NgbDateStruct;
}
