import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-articulos',
  templateUrl: './articulos.component.html',
  styleUrls: ['./articulos.component.scss']
})
export class ArticulosComponent {

  constructor(private router: Router) {
    
  }
  
  article(option: number){
    switch(option)
    {
      case 1:{
       this.router.navigate(['/software_a_la_medida'])
      }
    }
  }
}
