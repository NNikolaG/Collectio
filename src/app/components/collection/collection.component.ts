import { FilesService } from 'src/app/services/files.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Collections } from 'src/app/interfaces/collections';
import { CollectionsServices } from 'src/app/services/collections.services';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.scss']
})
export class CollectionComponent implements OnInit {

  private sub!: any;
  private collectionTitle!: string;
  public deleteColl!: number;

  public collection!: Collections;
  public item!: any;
  public items!: any[];

  public imageSrc!: string;
  public backgroundSrc!: string;

  constructor(
    private route: ActivatedRoute,
    private collectionServices: CollectionsServices,
    private filesService: FilesService) { }

  ngOnInit(): void {
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
    this.sub = this.route.params.subscribe(params => {
      this.collectionTitle = params['title'].replaceAll('-', ' ');
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
}
