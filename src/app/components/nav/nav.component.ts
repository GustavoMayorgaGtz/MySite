import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  constructor() {
  }

  ngOnInit(): void {
  }

  public menuOption : number = 0;
  changeMenuOption(number: number){
    this.menuOption = number;
  }

  public classMenu = "hiddeMenu";
  public isShowMenu = false;
  responsiveMenuClick_Event(menuElement: HTMLDivElement) {
    this.isShowMenu = !this.isShowMenu;
    if (this.isShowMenu) {
      this.classMenu = "showMenu";
      menuElement.classList.remove("hiddeMenu");
      menuElement.classList.toggle(this.classMenu)
      // menuElement.setAttribute("class", "showMenu");
    } else {
      this.classMenu = "hiddeMenu";
      menuElement.classList.remove("showMenu");
      menuElement.classList.toggle(this.classMenu)
      // menuElement.setAttribute("class", "hiddeMenu");
    }
    console.log(this.classMenu);  
    // menuElement.classList.toggle(this.classMenu);
    // menuElement.offsetHeight; // force DOM reflow
    //  menuElement.style.animation = "2s "+ this.classMenu+";";
    //  menuElement.style.animation = "2s "+ this.classMenu;
  }
}
