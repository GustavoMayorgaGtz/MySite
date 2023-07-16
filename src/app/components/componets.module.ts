import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { InicioComponent } from './inicio/inicio.component';
import { ContactoComponent } from './contacto/contacto.component';
import { ArticulosComponent } from './articulos/articulos.component';
import { NosotrosComponent } from './nosotros/nosotros.component';

const components = [NavComponent, InicioComponent, ContactoComponent, ArticulosComponent, NosotrosComponent];

@NgModule({
  declarations: components,
  imports: [
    CommonModule
  ],
  exports: components
})
export class ComponetsModule { }
