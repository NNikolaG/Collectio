import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-component',
  templateUrl: './info-component.component.html',
  styleUrls: ['./info-component.component.scss']
})
export class InfoComponentComponent implements OnInit {

  @Input() data!: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
