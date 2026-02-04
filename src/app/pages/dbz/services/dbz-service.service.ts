import { Injectable } from '@angular/core';
import { Formulario } from '../interfaces/form.interface';

@Injectable({
  providedIn: 'root'
})
export class DbzService {

    // para que guion bajo para hacer referencia a que es una propiedad  privada 
    public characteres:Formulario[] = [
      { nombre: 'Goku', power: 6005},
    ]
    
    // recomendaciones para manejar todo desde el sercicio
    
    //metoso para listar todo los personajes
    get Listpersonaes(): Formulario[] {
      return this.characteres;
    }

    constructor(){}

    //metodo para agregar personaje
    postAgregarPersona(datos: Formulario) {
      
      return this.characteres.push(datos);
    }
   
}
