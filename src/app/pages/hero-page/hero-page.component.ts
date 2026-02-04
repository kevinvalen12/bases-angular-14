import { Component } from '@angular/core';


@Component({
  selector: 'app-hero-page',
  templateUrl: './hero-page.component.html',
  styleUrls: ['./hero-page.component.css']
})
export class HeroPageComponent {
  nombre: string = 'Iroman';
  edad: number = 45;

  obtenerNombre(): string {
    return `${this.nombre} ${this.edad}`
  }

  cambiarHeroe(): string {
    return this.nombre = 'superma';
  }

  cambiarEdad(): number {
    return this.edad = 20;
  }

  primerHeror(): string | number {
    return this.nombre = 'Iroman', this.edad = 45;
  }


}
