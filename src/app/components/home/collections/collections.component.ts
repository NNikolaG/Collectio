import { CollectionsServices } from './../../../services/collections.services';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Collections } from 'src/app/interfaces/collections';

@Component({
  selector: 'app-collections',
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.scss']
})
export class CollectionsComponent implements OnInit {

  public page!: number;
  public perPage!: number;
  public pagesCount!: number;
  public totalCount!: number;

  collections!: Collections[];
  data!: Collections[];

  constructor(private collectionServices: CollectionsServices) { }

  ngOnInit(): void {
    this.getCollections();
  }

  getCollections(): void {
    this.collectionServices.getCollections();

    this.collectionServices.colx$.subscribe(data => {
      
      this.collections = data.data;
      this.page = data.page;
      this.perPage = data.perPage;
      this.pagesCount = data.pagesCount;
      this.totalCount = data.totalCount;

    })
  }
}
