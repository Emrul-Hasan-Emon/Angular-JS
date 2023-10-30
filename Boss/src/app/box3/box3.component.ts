import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NewserviceService } from '../newservice.service';
import { DataService } from '../data.service';

@Component({
  selector: 'app-box3',
  templateUrl: './box3.component.html',
  styleUrls: ['./box3.component.css']
})
export class Box3Component {
  heading : string = 'Component Three';

  @Output() 
  newItemThree = new EventEmitter<string>();
  inputTextOne: string = '';

  constructor(private service: NewserviceService, private dataservice: DataService) {}

  ngOnInit(): void {
    this.dataservice.dataemitter.subscribe((value) => {
      this.heading = value;
    })
  } 


  ClickOccurs() {
    // this.service.addData(this.inputTextOne);
    // this.newItemThree.emit();

    this.dataservice.raiseChange(this.inputTextOne);
    this.inputTextOne = '';

    setTimeout(() => {
      this.heading = 'Component One';
    }, 5000);
  }
}
