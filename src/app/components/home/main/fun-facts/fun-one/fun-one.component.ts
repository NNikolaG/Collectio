import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-fun-one',
  templateUrl: './fun-one.component.html',
  styleUrls: ['./fun-one.component.scss']
})
export class FunOneComponent implements OnInit {

  @Input() data : any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
