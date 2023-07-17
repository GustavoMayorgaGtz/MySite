import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SoftwareALaMedidaComponent } from './software-a-la-medida.component';


const routes: Routes = [
  {
    path: "",
    component: SoftwareALaMedidaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SoftwareMedidaRouting { }
