import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { finalize, Observable, Subject } from 'rxjs';
import { Paginate } from '../interfaces/paginate';

@Injectable({
  providedIn: 'root'
})

export class CollectionsServices {

  private baseUrl: string = "https://collectio.azurewebsites.net/api/collections";

  public message!: string;

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

  public getUserCollections(email: string): Observable<Paginate> {
    return this.http.get<Paginate>(this.baseUrl + "?email=" + email);
  }

  public createCollection(data: string) {
    const headers = { 'content-type': 'application/json' }
    this.http.post(this.baseUrl, data, { 'headers': headers }).subscribe({
      next: () => {
        this.message = "Collection Created";
      }
    });
  }

  public deleteCollection(id: number){
    this.http.delete(this.baseUrl + '/' + id).subscribe({
      next: (result) =>{
        window.location.replace("http://localhost:4200/my-collections");
      }
    });
  }
}
