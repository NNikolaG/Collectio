import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Paginate } from '../interfaces/paginate';

@Injectable({
  providedIn: 'root'
})

export class CollectionsServices {

  private baseUrl: string = "https://collectio.azurewebsites.net/api/collections";

  public colx$: Subject<Paginate> = new Subject<Paginate>();

  constructor(private http: HttpClient) { }

  private searchUrlContructor(urlPart: string): string {
    return this.baseUrl + '?keyword=' + urlPart;
  }

  public getCollections(): void {
    this.http.get<Paginate>(this.baseUrl).subscribe(data => {
      this.colx$.next(data);
    });
  }

  public searchCollection(keyword: string) {
    this.http.get<Paginate>(this.searchUrlContructor(keyword)).subscribe(data => {
      this.colx$.next(data);
    })
  }

  public getCollection(collectionName: string): Observable<Paginate> {
    return this.http.get<Paginate>(this.searchUrlContructor(collectionName));
  }
}
