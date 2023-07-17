import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-software-a-la-medida',
  templateUrl: './software-a-la-medida.component.html',
  styleUrls: ['./software-a-la-medida.component.scss']
})
export class SoftwareALaMedidaComponent implements OnInit{

  constructor(private meta: Meta){

  }

  ngOnInit(): void {
    // <meta name="description" content="Desarrollo de sistemas hechos a la medida para tu comercio o industria.">
    // <meta name="keywords" content="Audesystems, AudeSystems, audesystems, audeSystems, AUDESYSTEMS">
    // <meta name="author" content="Gustavo Mayorga">
    // <meta name="robots" content="index">
    this.meta.addTag({ name: 'description', content: 'Software a la medida, by Mayte Caldera' });
    this.meta.addTag({ name: 'author', content: 'Mayte Caldera, Gustavo Mayorga' });
    this.meta.addTag({ name: 'keywords', content: 'Software a la medida, SOFTWARE A LA MEDIDA, software a la medida, Software A La Medida, Software, Medida, software, medida' });
  }

}
