import { Component, OnInit, Output, EventEmitter,  } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  value:number = 1;
  interval;
  @Output() gameNumber = new EventEmitter<number>()

  constructor() { }

  ngOnInit() {
  }

  onStartGame() {
    this.interval = setInterval(() => {
      this.gameNumber.emit(this.value);
      this.value++;
    },
    1000
    );
  }

  onStopGame(){
    clearInterval(this.interval);
   }

}
