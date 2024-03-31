import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h3> Counter: {{counter}}</h3>

    <button (click)="increaseBy(2)" >Incremento</button>
    <button (click)="resetBy()" >Reset</button>
    <button (click)="decrementBy(2)" >Decremento</button>
  `
})

export class CounterComponent {

  public counter: number = 10;

  increaseBy( value: number ): void {
    this.counter += value;
  }

  decrementBy( value: number ): void {
    this.counter -= value;
  }

  resetBy( ): void {
    this.counter = 10 ;
  }

}
