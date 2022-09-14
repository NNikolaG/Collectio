import { $animations } from 'src/app/animations';
import { Component, OnInit } from '@angular/core';
import { CollectionsServices } from 'src/app/services/collections.services';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
  animations: [$animations]
})
export class BannerComponent implements OnInit {

  constructor(private collectionServices: CollectionsServices) { }

  ngOnInit(): void {
  }

  value!: string;

  searchCollection(keyword: string) {
      this.collectionServices.searchCollection(keyword);
  }
}
