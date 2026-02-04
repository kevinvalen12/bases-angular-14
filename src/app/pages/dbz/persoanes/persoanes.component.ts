import { Component, Input } from '@angular/core';
import { Formulario } from '../interfaces/form.interface';

@Component({
  selector: 'app-persoanes',
  templateUrl: './persoanes.component.html',
  styleUrls: ['./persoanes.component.css']
})
export class PersoanesComponent {
  @Input() listPersonajes!: Formulario[];


  

}
