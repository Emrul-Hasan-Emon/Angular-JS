import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NewserviceService } from '../newservice.service';
import { DataService } from '../data.service';

@Component({
  selector: 'app-box2',
  templateUrl: './box2.component.html',
  styleUrls: ['./box2.component.css']
})
export class Box2Component {
  heading: string = 'Component Two';

  @Output() 
  newItemTwo = new EventEmitter<string>();
  inputTextOne: string = '';

  constructor(private service: NewserviceService, private dataservice: DataService) {}

  ngOnInit(): void {
    this.dataservice.dataemitter.subscribe((value) => {
      this.heading = value;
    })
  } 

  ClickOccurs() {
    // this.service.addData(this.inputTextOne);
    // this.newItemTwo.emit();
  
    this.dataservice.raiseChange(this.inputTextOne);
    this.inputTextOne = '';

    setTimeout(() => {
      this.heading = 'Component One';
    }, 5000);
  }
}
