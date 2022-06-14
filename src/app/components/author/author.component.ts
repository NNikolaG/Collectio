import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.scss']
})
export class AuthorComponent implements OnInit {

  public infoBlock!: any;
  constructor() { }

  ngOnInit(): void {
  }

  click(event: { currentTarget: any; }) {
    var idAttr = event.currentTarget.id
    this.change(idAttr);
  }
  change(id: string) {
    var selector = "#info" + id;
    this.infoBlock = document.querySelector(selector);
    if (this.infoBlock.classList.contains('none')) {
      this.infoBlock.classList.remove('none');
      this.infoBlock.classList.add('block');
    }
    else {
      this.infoBlock.classList.add('none');
      this.infoBlock.classList.remove('block');
    }
  }
}
