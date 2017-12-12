import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-success-alert',
  templateUrl: './success-alert.component.html',
  styleUrls: ['./success-alert.component.css']
})
export class SuccessAlertComponent implements OnInit {
  value:string = "Redefine success"
  constructor() { }

  ngOnInit() {
  }

  changeName(event:any): void {
    this.value = (<HTMLInputElement>event.target).value;
  }
}
