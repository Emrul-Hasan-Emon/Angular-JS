import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  // dataemitter = new EventEmitter<string>();
  dataemitter = new Subject<string>();

  raiseChange(value: string) {
    this.dataemitter.next(value);
  } 
}
