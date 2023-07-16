import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AllService {
  public menuOption: EventEmitter<number> = new EventEmitter();
  constructor() { }

  setMenuOption(number: number){
    this.menuOption.emit(number);
  }
}
