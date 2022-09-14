import { Paginate } from './../interfaces/paginate';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  private baseUrl: string = "https://collectio.azurewebsites.net/api/items";

  constructor(private http: HttpClient) { }

  private searchUrlContructor(urlPart: string): string {
    return this.baseUrl + '?keyword=' + urlPart;
  }

  public getItems(itemCollection: string): Observable<Paginate> {
    return this.http.get<Paginate>(this.searchUrlContructor(itemCollection));
  }

}
