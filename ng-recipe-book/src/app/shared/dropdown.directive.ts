import { Directive, HostBinding, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

  constructor(private elRef:ElementRef) { }

  @HostListener('click') toggleOpen() {
    this.elRef.nativeElement.nextElementSibling.classList.toggle("show");
  }
}
