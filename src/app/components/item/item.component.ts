import { FilesService } from 'src/app/services/files.service';
import { Infos } from './../../interfaces/infos';
import { ItemsService } from './../../services/items.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Items } from 'src/app/interfaces/items';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  private sub!: any;
  private itemName!: string;

  public item!: Items;
  public infos!: [Infos]
  public imageSrc!: string;

  constructor(private route: ActivatedRoute, private itemServices: ItemsService, private filesService: FilesService) { }

  ngOnInit(): void {
    this.getItemName();
    this.getItems();
  }
  setImages(){
    this.filesService.getImage(this.item.image).subscribe((data: any) => {
      this.imageSrc = data;
    })
  }

  getItemName() {
    this.sub = this.route.params.subscribe((params: { [x: string]: any; }) => {
      this.itemName = params['name'].replaceAll('-', ' ');
    });
  }

  public getItems() {
    this.itemServices.getItems(this.itemName).subscribe(data => {
      this.item = data.data[0];
      this.infos = data.data[0].collectionItemInfos;
      this.setImages();
    })
  }
}
