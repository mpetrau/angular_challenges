import { Injectable } from '@angular/core';

@Injectable()
export class LoggingService {

  constructor() { }

  logStatusChange(newStatus){
    console.log('A server status changed, new status: ' + newStatus);
  }
}
