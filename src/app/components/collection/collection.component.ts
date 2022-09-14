import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Collections } from 'src/app/interfaces/collections';
import { Items } from 'src/app/interfaces/items';
import { CollectionsServices } from 'src/app/services/collections.services';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.scss']
})
export class CollectionComponent implements OnInit {

  private sub!: any;
  private collectionTitle!: string;

  public collection!: Collections;
  public item!: any;
  public items!: any[];

  constructor(private route: ActivatedRoute, private collectionServices: CollectionsServices) { }

  ngOnInit(): void {
    this.getCollectionName();
    this.getCollection();
  }

  getCollectionName() {
    this.sub = this.route.params.subscribe(params => {
      this.collectionTitle = params['title'].replaceAll('-', ' ');
    });
  }

  getCollection(){
    this.collectionServices.getCollection(this.collectionTitle).subscribe(data =>{
      this.collection = data.data[0];
      this.item = data.data[0].items[0];
      this.items = data.data[0].items;
    })
  }
}
