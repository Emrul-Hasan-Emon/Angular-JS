import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NewserviceService } from '../newservice.service';

@Component({
  selector: 'app-box1',
  templateUrl: './box1.component.html',
  styleUrls: ['./box1.component.css']
})
export class Box1Component {
  @Input() 
  heading: string | undefined;
  
  @Output() 
  newItemOne = new EventEmitter<string>();
  
  inputTextOne: string = '';

  constructor(private service: NewserviceService) {}

  ClickOccurs() {
    this.service.addData(this.inputTextOne);
    this.newItemOne.emit();
  }
}
