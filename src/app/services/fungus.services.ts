import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, switchMap } from 'rxjs';

import { AngularFireAction, AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { Fungi } from '../interfaces/fungi';
import { Fun } from '../interfaces/funFacts';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class FungusService {

  public facts: Observable<Fun[]>;
  public fungus: Observable<Fungi[]>;
  private itemsRef: AngularFireList<any>;
  private itemsRef2: AngularFireList<any>;

  singleFungi!: Observable<AngularFireAction<firebase.default.database.DataSnapshot>[]>;
  fungiModel!: BehaviorSubject<any>;

  private url  ="https://thefungiapi20220521195926.azurewebsites.net/api/collections";

  constructor(db: AngularFireDatabase, private httpClient: HttpClient) {

    
    this.itemsRef = db.list('fungus');
    this.fungus = this.itemsRef.valueChanges();

    //SnapShot Changes
    // this.itemsRef2 = db.list('fun-facts');
    // this.facts = this.itemsRef2.snapshotChanges().pipe(
    //   map(changes => changes.map(
    //     c => ({
    //       key: c.payload.key, ...c.payload.val()
    //     })
    //   )
    //   )
    // )

    this.itemsRef2 = db.list('fun-facts');
    this.facts = this.itemsRef2.valueChanges();

    this.fungiModel = new BehaviorSubject(null);
    this.singleFungi = this.fungiModel.pipe(
      switchMap(size =>
        db.list('fungus', ref =>
          size ? ref.orderByChild('model').equalTo(size) : ref
        ).snapshotChanges()
      )
    );

  }

  getPosts(){
    return this.httpClient.get(this.url);
  }

  public find(name: string | null): Observable<AngularFireAction<firebase.default.database.DataSnapshot>[]> {
    this.fungiModel.next(name);
    return this.singleFungi;
  }

  public getFungus(): Observable<Fungi[]> {
    return this.fungus;
  }

  public getFunFacts(): Observable<Fun[]> {
    return this.facts;
  }

  //   public addProduct(newItem: any): void {
  //     this.itemsRef.push(newItem);
  //   }

  //   public deleteProduct(key: string): void {
  //     this.itemsRef.remove(key);
  //   }
}
