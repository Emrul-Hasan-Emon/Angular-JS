import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewserviceService {
  inputData : string = '';
  constructor() { }

  addData(value: string) {
    this.inputData = value;
  }

  getData() {
    return this.inputData;
  }
}
