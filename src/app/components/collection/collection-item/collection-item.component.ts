import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-collection-item',
  templateUrl: './collection-item.component.html',
  styleUrls: ['./collection-item.component.scss']
})
export class CollectionItemComponent implements OnInit {

  @Input() itemData!: any;
  @Input() title!: string;

  constructor() { }

  ngOnInit(): void {
  }
  public transformUrl(data: string): string {
    return data.replace(/\s/g, '-');
  }
}
