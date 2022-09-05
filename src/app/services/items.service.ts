import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  private itemInfos!: any;
  private singleItem!: Observable<unknown[]>;;
  constructor(private db: AngularFireDatabase) {

  }

  public find(title: string | null): Observable<unknown[]> {
    this.singleItem = this.db.list('collectionItems', ref =>
      ref.orderByChild('title').equalTo(title)
    ).valueChanges();

    return this.singleItem;
  }

  public infos(infoIds: []): Observable<unknown[]>[] {
    this.itemInfos = new Array<Observable<unknown[]>>();
    infoIds.forEach((element: string | number | boolean | null) => {
      let obj = this.db.list('itemInfos', ref =>
        ref.orderByChild('id').equalTo(element)
      ).valueChanges();
      this.itemInfos.push(obj);
    });
    return this.itemInfos;
  }

}
