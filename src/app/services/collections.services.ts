import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';

import { Collections } from './../interfaces/collections';


@Injectable({
  providedIn: 'root'
})

export class CollectionsServices {

  public collections: Observable<Collections[]>;
  private itemsRef: AngularFireList<any>;

  singleCollection!: Observable<unknown[]>;
  collectionModel!: BehaviorSubject<any>;

  authorData!: Observable<unknown[]>;
  private itemsData!: any;

  constructor(private db: AngularFireDatabase) {

    this.itemsRef = db.list('collections');
    this.collections = this.itemsRef.valueChanges();
  }

  public find(title: string | null): Observable<unknown[]> {
    this.singleCollection = this.db.list('collections', ref =>
      ref.orderByChild('title').equalTo(title)
    ).valueChanges();

    return this.singleCollection;
  }

  public author(userId: string | null): Observable<unknown[]> {
    this.authorData = this.db.list('users', ref =>
      ref.orderByChild('id').equalTo(userId)
    ).valueChanges();

    return this.authorData;
  }

  public items(itemIds: []): Observable<unknown[]>[] {
    this.itemsData = new Array<Observable<unknown[]>>();
    itemIds.forEach(element => {
      let obj = this.db.list('collectionItems', ref =>
        ref.orderByChild('id').equalTo(element)
      ).valueChanges();
      this.itemsData.push(obj);
    });
    return this.itemsData;
  }

  public getCollections(): Observable<Collections[]> {
    return this.collections;
  }

}
