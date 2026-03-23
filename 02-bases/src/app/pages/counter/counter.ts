import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  styleUrl: './counter.css',
  templateUrl: './counter.html',
  changeDetection: ChangeDetectionStrategy.OnPush,

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

  constructor() {

    setInterval(() => {
      //this.counter = this.counter + 1;
      this.counterSingal.update((current) => current + 1);
      console.log('Tick');
    }, 2000);
  }

}
