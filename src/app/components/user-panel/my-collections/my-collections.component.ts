import { CollectionsServices } from 'src/app/services/collections.services';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Collections } from 'src/app/interfaces/collections';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-my-collections',
  templateUrl: './my-collections.component.html',
  styleUrls: ['./my-collections.component.scss']
})
export class MyCollectionsComponent implements OnInit {

  collections!: Collections[];
  link!: string;

  constructor(private collectionsServices: CollectionsServices, private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.getMoreUserInfo();
    this.getUserCollections();
  }

  getUserCollections() {
    const email = JSON.parse(localStorage.getItem('user')!).email;
    this.collectionsServices.getUserCollections(email).subscribe(data =>{
      this.collections = data.data;
    });
  }

}
