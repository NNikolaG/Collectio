import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Fun } from 'src/app/interfaces/funFacts';
import { FungusService } from 'src/app/services/fungus.services';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  host: {
    'height': '50vh'
  }
})
export class MainComponent implements OnInit {


  public animateSlideImages: boolean = false;
  public animateQuote: boolean = false;
  public animateLow: boolean = false;
  public scrollLevel!: number;
  public resizeLevel!: number;

  constructor() { }

  ngOnInit(): void {


    if (window.screen.width <= 768) {
      this.animateLow = true;
    }

    this.animationTriggers();
    this.animateOnLowerView();
  }



  animationTriggers() {
    window.onscroll = () => {
        
      //pozicija scroll-a 
      this.scrollLevel = window.pageYOffset;

      //okidanje animacija
      this.animateSlideImages = this.scrollLevel >= 840 ? true : false;
      this.animateQuote = this.scrollLevel >= 750 ? true : false;
    }
  }

  //na manjim uredjajima animacije se ne prikazuju kako je zamisljeno
  //ovde se proverava sirina ekrana uredjaja
  animateOnLowerView() {
    window.onresize = () => {
      this.resizeLevel = window.screen.width;
      if (this.resizeLevel <= 768) {
        this.animateLow = true;
      } else {
        this.animateLow = false;
      }
    }
  }

  //On Scroll promena stilova elementima 
  //Lijeva strana - image slide
  get slideLtoR() {

    if (this.animateSlideImages == true && this.animateLow == false) {
      const value = ((this.scrollLevel / 100) * 5.5) - 200;
      return {
        'transform': 'translateX(' + value + '%)'
      }
    }
    else if (this.animateSlideImages == true && this.animateLow == true) {
      const value = ((this.scrollLevel / 100) * 5.5) - 400;
      return {
        'transform': 'translateX(' + value + '%)'
      }
    }
    return {
      'transform': 'translateX(-150%)'
    }
  }

  //Desna strana - image slide
  get slideRtoL() {
    if (this.animateSlideImages == true && this.animateLow == false) {
      const value = 110 - ((this.scrollLevel / 100) * 5.5);
      return {
        'transform': 'translateX(' + value + '%)'
      }
    }
    else if (this.animateSlideImages == true && this.animateLow == true) {
      const value = 190 - ((this.scrollLevel / 100) * 5.5);
      return {
        'transform': 'translateX(' + value + '%)'
      }
    }
    return {
      'transform': 'translateX(150%)'
    }
  }

  //On Scroll promena opacity-ja za quote 
  get quoteShow() {
    if (this.animateQuote == true) {
      const value = ((this.scrollLevel / 1000) / 1.3);
      return {
        'opacity': value
      }
    }
    return {
      'opacity': 0
    }
  }
}
