import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page/main-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PersoanesComponent } from './persoanes/persoanes.component';
import { FormularioComponent } from './formulario/formulario.component';
import { DbzService } from './services/dbz-service.service';



@NgModule({
  declarations: [
    MainPageComponent,
    PersoanesComponent,
    FormularioComponent,
  ],
  exports: [
    MainPageComponent
  ],
  imports: [
    CommonModule, 
    ReactiveFormsModule,
  ],
  providers: [
    DbzService
  ]
})
export class DbzModule { }
