import { Injectable } from '@angular/core';

@Injectable()
export class CounterService {
  toActiveCounter: number = 0;
  toInactiveCounter: number = 0;

  constructor() { }

  incrementActive(){
    this.toActiveCounter++;
  }

  incrementInactive(){
    this.toInactiveCounter++;
  }
}
