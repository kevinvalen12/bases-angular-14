// EventEmitter se debe de importa del @angular/core
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Formulario } from '../interfaces/form.interface';
import { DbzService } from '../services/dbz-service.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  // EventEmitter permite pasar datso del  componente segundario al principal
  /*
    para completar el reto solo fue inplementar EventEmitter
  */
  // @Output() formularioEnviado = new EventEmitter<Formulario>();
  
  formularioDbz!: FormGroup;


  constructor(private fb: FormBuilder, private _dragonBallService: DbzService) { }

  ngOnInit(): void {
      // le pasa el obejtos donde esta el nombre y power a formularioDbz
      this.formularioDbz = this.fb.group({
        nombre: ['', Validators.required],
        power: [0, [Validators.required, Validators.min(1)]],
      })

  }


   guardarDatos(): void{
      if(this.formularioDbz.invalid){
        return;
      }
      
      /* 
        guarda los datos formulario ya que si se trata de enviar 
        solo el formularioDbz y no crear el EventEmitter
        saldra un alerta 
      */ 
      // los tados del formulario se inyectan directamente en el sercivio 
      const value: Formulario = this.formularioDbz.value
      this._dragonBallService.postAgregarPersona(value);

      /*
        para reset los valores de formulario y no interrunpa el 
        el envio del los valores se agrega a lo ultimo 
      */ 
      this.formularioDbz.reset({ nombre: '', power: 0 }, {emitEvent: false});
    }
}
