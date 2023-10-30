import { Component } from '@angular/core';
import { NewserviceService } from './newservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  /*
  componentOneHeading: string = "ComponentOne";
  componentTwoHeading: string = "ComponentTwo";
  componentThreeHeading: string = "ComponentThree";

  constructor(private service: NewserviceService) {}

  Set1() {
    this.componentTwoHeading = this.service.getData();
    this.componentThreeHeading = this.service.getData();
  }
  Set2() {
    this.componentOneHeading = this.service.getData();
    this.componentThreeHeading = this.service.getData();
  }
  Set3() {
    this.componentTwoHeading = this.service.getData();
    this.componentOneHeading = this.service.getData();
  }
  */
}
