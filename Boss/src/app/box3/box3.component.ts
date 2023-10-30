import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NewserviceService } from '../newservice.service';

@Component({
  selector: 'app-box3',
  templateUrl: './box3.component.html',
  styleUrls: ['./box3.component.css']
})
export class Box3Component {
  @Input() 
  heading : string | undefined;
  @Output() 
  newItemThree = new EventEmitter<string>();
  inputTextOne: string = '';

  constructor(private service: NewserviceService) {}

  ClickOccurs() {
    this.service.addData(this.inputTextOne);
    this.newItemThree.emit();
  }
}
