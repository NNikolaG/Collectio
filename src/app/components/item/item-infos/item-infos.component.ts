import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-infos',
  templateUrl: './item-infos.component.html',
  styleUrls: ['./item-infos.component.scss']
})
export class ItemInfosComponent implements OnInit {

  @Input() info: any;

  constructor() { }

  ngOnInit(): void {
  }

}
