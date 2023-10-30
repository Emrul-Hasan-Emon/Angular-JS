import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NewserviceService } from '../newservice.service';

@Component({
  selector: 'app-box2',
  templateUrl: './box2.component.html',
  styleUrls: ['./box2.component.css']
})
export class Box2Component {
  @Input() 
  heading: string | undefined;
  @Output() 
  newItemTwo = new EventEmitter<string>();
  inputTextOne: string = '';

  constructor(private service: NewserviceService) {}

  ClickOccurs() {
    this.service.addData(this.inputTextOne);
    this.newItemTwo.emit();
  }
}
