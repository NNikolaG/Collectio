import { Component, Input, OnInit } from '@angular/core';
import { Fun } from 'src/app/interfaces/funFacts';

@Component({
  selector: 'app-fun-three',
  templateUrl: './fun-three.component.html',
  styleUrls: ['./fun-three.component.scss']
})
export class FunThreeComponent implements OnInit {

  @Input() data!: Fun;

  constructor() { }

  ngOnInit(): void {
  }

}
