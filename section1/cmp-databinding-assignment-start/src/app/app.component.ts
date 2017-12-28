import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  oddNumbers: number[] = [];
  evenNumbers: number[] = [];

  onGameRunning(number) {
    if (number % 2) {
      this.oddNumbers.unshift(number);
    } else {
      this.evenNumbers.unshift(number);
    }
  }
}
