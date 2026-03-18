import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  styleUrl: './counter.css',
  templateUrl: './counter.html'
})
export class Counter {

  counter = 10;
  counterSingal= signal(100); 
  
  increaseByOne(value: number) {
    this.counter = this.counter + value;
    this.counterSingal.update((current) => current + value);
  }

  decreaseByOne(value: number) {
    this.counter = this.counter - value;
    this.counterSingal.update((current) => current - value);  
  }

  resetCounter() {
    this.counter = 0;
    this.counterSingal.set(1);
  }


}
