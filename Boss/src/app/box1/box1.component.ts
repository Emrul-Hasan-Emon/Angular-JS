import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NewserviceService } from '../newservice.service';
import { DataService } from '../data.service';

@Component({
  selector: 'app-box1',
  templateUrl: './box1.component.html',
  styleUrls: ['./box1.component.css']
})
export class Box1Component {
  heading : string = 'Component One';
  
  @Output() 
  newItemOne = new EventEmitter<string>();
  
  inputTextOne: string = '';

  constructor(private service: NewserviceService, private dataservice: DataService) {}

  ngOnInit(): void {
    this.dataservice.dataemitter.subscribe((value) => {
      this.heading = value;
    })
  } 

  
  ClickOccurs() {
    // this.service.addData(this.inputTextOne);
    // this.newItemOne.emit();

    this.dataservice.raiseChange(this.inputTextOne);
    this.inputTextOne = '';

    setTimeout(() => {
      this.heading = 'Component One';
    }, 5000);
  }
}
