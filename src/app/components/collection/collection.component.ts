import { Component, OnInit } from '@angular/core';
import { AngularFireAction } from '@angular/fire/compat/database';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Items } from 'src/app/interfaces/items';
import { CollectionsServices } from 'src/app/services/collections.services';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.scss']
})
export class CollectionComponent implements OnInit {

  collectionTitle!: string;
  sub!: any;
  data!: any;
  author!: any;
  items = new Array<any>();

  itemData!: Items[];

  authorObs!: Observable<unknown[]>;
  collection!: Observable<unknown[]>;
  itemsObs!: Observable<unknown[]>[];

  constructor(private route: ActivatedRoute, private collectionServices: CollectionsServices) { }

  ngOnInit(): void {
    this.getCollectionName();
    this.getCollection(this.collectionTitle);
  }

  ngAfterViewInit() {
    this.valueChecker();
  }

  valueChecker() {
    if (this.data == undefined) {
      this.valueChecker();
    }
    this.getAuthor(this.data.userId);
    this.getItems(this.data.items);
  }

  getCollectionName() {
    this.sub = this.route.params.subscribe(params => {
      this.collectionTitle = params['title'].replaceAll('-', ' ');
    });
  }

  getCollection(name: string) {
    this.collection = this.collectionServices.find(name);
    this.collection.subscribe(val => this.data = val[0]);
  }

  getAuthor(id: string) {
    this.authorObs = this.collectionServices.author(id);
    this.authorObs.subscribe(val => this.author = val[0]);
  }

  getItems(itemIds: []) {
    this.itemsObs = this.collectionServices.items(itemIds);
    this.itemsObs.forEach(element => {
      element.subscribe(val => this.items.push(val[0]));
    });
  }
}
