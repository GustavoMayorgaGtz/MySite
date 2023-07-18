import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-software-a-la-medida',
  templateUrl: './software-a-la-medida.component.html',
  styleUrls: ['./software-a-la-medida.component.scss']
})
export class SoftwareALaMedidaComponent implements OnInit{

  constructor(private meta: Meta){
    this.meta.addTag({ name: 'description', content: 'Software a la medida, by Mayte Caldera' });
    this.meta.addTag({ name: 'author', content: 'Mayte Caldera, Gustavo Mayorga' });
    this.meta.addTag({ name: 'keywords', content: 'Software a la medida, SOFTWARE A LA MEDIDA, software a la medida, Software A La Medida, Software, Medida, software, medida' });

     // Agrega las meta etiquetas específicas
     this.meta.addTag({ property: 'og:title', content: 'Audesystems' });
     this.meta.addTag({ property: 'og:description', content: 'Software a la medida, by Mayte Caldera' });
     this.meta.addTag({ property: 'og:image', content: 'https://audesystems.com/favicon.ico' });
  }

  ngOnInit(): void {
  }

}
