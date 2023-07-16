import { Component, OnInit } from '@angular/core';
import { AllService } from 'src/app/servicios/all.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  public menuOption: number = 2;
  constructor(private servicios: AllService){
    
  }

  ngOnInit(): void {
    this.servicios.menuOption.subscribe((option) =>{
       this.menuOption = option;
    })
  }

}
