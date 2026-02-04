import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroPageComponent } from './hero-page.component';
import { ListadoComponent } from './listado/listado.component';



@NgModule({
  declarations: [HeroPageComponent],
  exports: [HeroPageComponent],
  imports: [
    CommonModule,
    ListadoComponent
  ]
})
export class HeroPageModule { }
 