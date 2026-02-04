import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
  counter: number = 5;
  base: number = 5;
  
  acumlar(valor: number) {
    this.base += valor;
  }

  // counterSuma(valor: number){
  //   this.counter ++;    
  // }
  // counterCero(){ 
  //   this.counter = 0; 
  // }
  // counterResta(){
  //   this.counter --;

  // }
}
