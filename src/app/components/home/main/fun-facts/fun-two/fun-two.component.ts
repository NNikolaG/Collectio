import { Fun } from 'src/app/interfaces/funFacts';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-fun-two',
  templateUrl: './fun-two.component.html',
  styleUrls: ['./fun-two.component.scss']
})
export class FunTwoComponent implements OnInit {

  @Input() data! : Fun;
  
  constructor() { }

  ngOnInit(): void {
  }

}
