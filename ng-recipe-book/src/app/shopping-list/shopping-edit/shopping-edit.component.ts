import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef:ElementRef;
  @ViewChild('amountInput') amountInputRef:ElementRef;
  @Output() addedIngredient = new EventEmitter<Ingredient>()

  constructor() { }

  ngOnInit() {
  }

  onIngredientAdd(){
    const newIngredient = new Ingredient (
      this.nameInputRef.nativeElement.value,
      this.amountInputRef.nativeElement.value
    );
    this.addedIngredient.emit(newIngredient);
  }

}
