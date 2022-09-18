import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  private baseUrl: string = 'https://collectio.azurewebsites.net/api/categories'
  constructor(private http: HttpClient) { }

  getCategories(){
    return this.http.get(this.baseUrl);
  }
}
