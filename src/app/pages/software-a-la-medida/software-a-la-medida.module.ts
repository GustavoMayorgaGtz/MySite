import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponetsModule } from 'src/app/components/componets.module';
import { SoftwareALaMedidaComponent } from './software-a-la-medida.component';
import { SoftwareMedidaRouting } from './software-a-la-medida-routing';



@NgModule({
  declarations: [SoftwareALaMedidaComponent],
  imports: [
    CommonModule,
    SoftwareMedidaRouting,
    ComponetsModule
  ]
})
export class SoftwareMedidaModule { }
