import { FilesService } from 'src/app/services/files.service';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Collections } from 'src/app/interfaces/collections';
import { CollectionsServices } from 'src/app/services/collections.services';

@Component({
  selector: 'app-edit-collection',
  templateUrl: './edit-collection.component.html',
  styleUrls: ['./edit-collection.component.scss']
})
export class EditCollectionComponent implements OnInit {


  private collectionTitle!: string;

  public collection!: Collections;
  public item!: any;
  public items!: any[];
  public deleteColl!: number;
  public imageSrc!: string;
  public backgroundSrc!: string;

  public myCollection: boolean = false;

  constructor(private route: ActivatedRoute, private collectionServices: CollectionsServices, private filesService: FilesService) { }

  ngOnInit(): void {
    this.getUserCollections();
    this.getCollectionName();
    this.getCollection();
  }

  setImages() {
    this.filesService.getImage(this.item.image).subscribe((data: any) => {
      this.imageSrc = data;
    })
    this.filesService.getImage(this.collection.backgroundImage).subscribe((data: any) => {
      this.backgroundSrc = data;
    })
  }

    getCollectionName() {
      this.route.params.subscribe(params => {
        this.collectionTitle = params['collection'].replaceAll('-', ' ');
      });
    }

    getCollection() {
      this.collectionServices.getCollection(this.collectionTitle).subscribe(data => {
        this.collection = data.data[0];
        this.item = data.data[0].items[0];
        this.items = data.data[0].items;
        this.setImages();
        if (this.items.length == 1) {
          this.deleteColl = this.collection.id;
        }
      })
    }

    deleteCollection(id: number) {
      this.collectionServices.deleteCollection(id);
    }

    getUserCollections() {
      const email = JSON.parse(localStorage.getItem('user')!).email;
      this.collectionServices.getUserCollections(email).subscribe(data => {
        data.data.forEach((e) => {
          if (e.title == this.collectionTitle) {
            this.myCollection = true;
          }
        })
      });
    }

  }
