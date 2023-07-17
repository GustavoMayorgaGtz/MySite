import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    loadChildren: ()=>import('./home/home.module').then(m => m.HomeModule)
  },
  {
    path: "software_a_la_medida",
    loadChildren: ()=>import('./software-a-la-medida/software-a-la-medida.module').then(m => m.SoftwareMedidaModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRouting { }
