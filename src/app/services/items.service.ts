import { Paginate } from './../interfaces/paginate';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  private baseUrl: string = "https://collectio.azurewebsites.net/api/items";
  public message!: string;

  constructor(private http: HttpClient) { }

  private searchUrlContructor(urlPart: string): string {
    return this.baseUrl + '?keyword=' + urlPart;
  }

  public getItems(itemCollection: string): Observable<Paginate> {
    return this.http.get<Paginate>(this.searchUrlContructor(itemCollection));
  }

  public createCollectionItem(data: string) {
    console.log(data);
    const headers = { 'content-type': 'application/json' }

    this.http.post(this.baseUrl, data, { 'headers': headers }).subscribe({
      next: (result) => {
        console.log(result);
        this.message = "Item created";
      }
    })
  }

  public deleteItem(id: number) {
    this.http.delete(this.baseUrl + '/' + id).subscribe({
      next: (response) => {
        location.reload();
      }
    });
  }

}
