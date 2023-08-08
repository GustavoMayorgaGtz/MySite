import { Component, OnInit } from '@angular/core';
import { AllService } from 'src/app/servicios/all.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  constructor(private servicios: AllService) {
  }

  ngOnInit(): void {
  }

  public menuOption : number = 0;
  changeMenuOption(number: number){
    if(number != 4){
      this.menuOption = number;
      this.servicios.setMenuOption(number);
      this.responsiveMenuClick_Event(this.menuElement);
    }else{
      window.location.href = "https://www.instagram.com/audesystems/";
    }
  }

  public classMenu = "hiddeMenu";
  public isShowMenu = false;
  public menuElement!: HTMLDivElement;
  responsiveMenuClick_Event(menuElement: HTMLDivElement) {
    this.menuElement = menuElement;
    this.isShowMenu = !this.isShowMenu;
    if (this.isShowMenu) {
      this.classMenu = "showMenu";
      menuElement.classList.remove("hiddeMenu");
      menuElement.classList.toggle(this.classMenu)
    } else {
      this.classMenu = "hiddeMenu";
      menuElement.classList.remove("showMenu");
      menuElement.classList.toggle(this.classMenu)
    }
  }
}
