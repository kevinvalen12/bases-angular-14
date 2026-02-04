import { CommonModule, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { Heroe } from '../interface/heroe.interfac';

@Component({
  standalone: true,
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  // asi se importa la directivas en este caso el *ngFor
  imports: [CommonModule ],
})
export class ListadoComponent {

   heroes: Heroe[] = [
    { nombre: 'Spider-Man', fuerza: 20000, identidad: 'Peter Parker' },
    { nombre: 'Iron Man',   fuerza: 50000, identidad: 'Tony Stark' },
    { nombre: 'Hulk',       fuerza: 99999, identidad: 'Bruce Banner' },
    { nombre: 'Thor',       fuerza: 85000, identidad: 'Thor Odinson' }
  ];

  heroeBorrado: Heroe[] = [];



  borrarHeroe(): void {
    //this.heroes.length  = 0;  
    let mostrarHeroe = this.heroes.shift();
      // mostrarHeroe es undefined le asigne un objeto vacio  
      this.heroeBorrado = mostrarHeroe ? [mostrarHeroe] : [] ;
  }    
    
  // shift();  Elimina el primer elemento
  // pop();  Elimina el ultimo elemento
}

