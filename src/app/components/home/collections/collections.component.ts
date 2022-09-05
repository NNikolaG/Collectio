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

  collections!: Observable<Collections[]>;
  data!: Collections[];

  constructor(private collectionServices: CollectionsServices) { }

  ngOnInit(): void {
    this.getCollections();
  }

  getCollections(): void {
    this.collections = this.collectionServices.getCollections();
  }
}
