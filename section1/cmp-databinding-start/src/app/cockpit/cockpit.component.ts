import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{serverName:string, serverContent:string}>()
  @Output() blueprintCreated = new EventEmitter<{serverName:string, serverContent:string}>()
  // Not needed with a local reference (using local references through the method)
  // newServerName = '';
  // Not needed with a local reference (insteadusing ViewChild):
  // newServerContent = '';
  @ViewChild('inputServerContent') inputServerContent:ElementRef;

  constructor() { }

  ngOnInit() {
  }

  onAddServer(dataInput:HTMLInputElement) {
    this.serverCreated.emit({
      // serverName: this.newServerName,
      serverName: dataInput.value,
      // serverContent: this.newServerContent
      serverContent: this.inputServerContent.nativeElement.value
    });
  }

  onAddBlueprint(dataInput:HTMLInputElement) {
    this.blueprintCreated.emit({
      // serverName: this.newServerName,
      serverName: dataInput.value,
      // serverContent: this.newServerContent
      serverContent: this.inputServerContent.nativeElement.value
    });
  }

}
