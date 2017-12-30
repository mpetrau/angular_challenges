import { Component, DoCheck } from '@angular/core';
import { CounterService } from './counter.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  activeCount:number = 0;
  inactiveCount:number = 0;

  constructor(private counterService:CounterService) { }

  ngDoCheck(){
    this.activeCount = this.counterService.toActiveCounter;
    this.inactiveCount = this.counterService.toInactiveCounter;
  }
}
