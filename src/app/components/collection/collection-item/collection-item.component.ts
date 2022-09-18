import { FilesService } from './../../../services/files.service';
import { CollectionsServices } from 'src/app/services/collections.services';
import { ItemsService } from './../../../services/items.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-collection-item',
  templateUrl: './collection-item.component.html',
  styleUrls: ['./collection-item.component.scss']
})
export class CollectionItemComponent implements OnInit {

  @Input() itemData!: any;
  @Input() title!: string;
  @Input() mode!: string;
  @Input() deleteColl!: number;

  public imageSrc!: string;

  constructor(
    private itemsService: ItemsService,
    private collectionsService: CollectionsServices,
    private filesService: FilesService
  ) { }

  ngOnInit(): void {
    this.filesService.getImage(this.itemData.image).subscribe((data: any) => {
      this.imageSrc = data;
    })
  }
  public transformUrl(data: string): string {
    return data.replace(/\s/g, '-');
  }

  public deleteMe(id: number) {
    this.itemsService.deleteItem(id);
  }
  public deleteCollection(id: number) {
    this.collectionsService.deleteCollection(id);
  }
}
