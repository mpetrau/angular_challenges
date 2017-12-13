import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  username:string = '';
  passwordHidden:boolean = true;
  log:string[] = [];

  constructor() { }

  ngOnInit() {
  }
  resetUsername():void{
    this.username = '';
  }

  displayDetails(event):void{
    this.passwordHidden = !this.passwordHidden;
    this.addLog(event);

  }

  addLog(event):void{
    let logEntree = event.target.localName + " " + event.target.id + " clicked at " + event.timeStamp;
    this.log.push(logEntree);
    console.log(this.log);
  }
}
