import { Component, inject } from '@angular/core';
import type { Formulario } from '../interfaces/form.interface';
import { DbzService } from '../services/dbz-service.service';
 
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {
   
  constructor(private _dragonBallService: DbzService) {}

  get characteres(): Formulario[] {
   return this._dragonBallService.Listpersonaes;
  }

  
  // ya no se necesita ya que el formuaro se inyecta directamente
  // guardar(datos: Formulario) {
  //   this._dragonBallService.postAgregarPersona(datos);
  // }


}
