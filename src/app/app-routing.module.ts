import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  
  {
    path: "",
    loadChildren: ()=>import('./pages/pages.module').then(m => m.ModuleModule)
  },
  {
    path: "software_a_la_medida",
    loadChildren: ()=>import('./pages/software-a-la-medida/software-a-la-medida.module').then(m => m.SoftwareMedidaModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
