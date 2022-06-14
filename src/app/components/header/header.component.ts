import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public clicked: boolean = false;
  public triggerAnimation!: boolean;
  public scrollValue!: number;

  constructor() { }

  ngOnInit(): void {
    this.animateHeader();
  }

  //OnScroll trigger za promenu stilova header-a
  animateHeader() {
    window.addEventListener('scroll', () => {
      this.scrollValue = window.pageYOffset;
      if (this.scrollValue > 100) {
        this.triggerAnimation = true;
      }
      else {
        this.triggerAnimation = false;
      }
    })
  }

  animateButton() {
    this.clicked = !this.clicked;
  }

  //Dodavanje stilova i animacija menu-button-u
  get buttonAnimation() {
    if (this.clicked) {
      return {
        "animation-name": "animateMenuIn",
        "animation-duration": "3s",
        "animation-fill-mode": "forwards"
      }
    }
    return {
      "animation-name": "animateMenuOut",
      "animation-duration": "3s",
      "animation-fill-mode": "forwards"
    }
  }

  //stilovi 
  get headerOverlay() {
    if (this.triggerAnimation) {
      return {
        "animation-name": "headerIn",
        "animation-duration": "0.5s",
        "animation-fill-mode": "forwards"
      }
    }
    return {
      "animation-name": "headerOut",
      "animation-duration": "0.5s",
      "animation-fill-mode": "forwards"
    }
  }

  get aTagColor() {
    if (this.triggerAnimation) {
      return {
        "color": "#ffedc5"
      }
    }
    return {
      "color": "#212529"
    }
  }
}


