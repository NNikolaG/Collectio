import { FilesService } from './../../../services/files.service';
import { ItemsService } from './../../../services/items.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-item',
  templateUrl: './create-item.component.html',
  styleUrls: ['./create-item.component.scss']
})
export class CreateItemComponent implements OnInit {

  public createItem = new FormGroup({
    title: new FormControl('', [Validators.required]),
    itemImage: new FormControl('', [Validators.required])
  });

  public collectionId!: number;
  public image!: any;
  public errors: string = '';

  constructor(
    public itemsService: ItemsService,
    private route: ActivatedRoute,
    private filesServices: FilesService
  ) { }

  ngOnInit(): void {
    this.getCollectionId();
  }

  onSubmit(): void {
    if (this.createItem.valid && this.errors == '') {
      const image = this.itemImage?.value.split("\\")[2];
      const newItem = JSON.stringify({
        'Title': this.title?.value,
        'Image': image,
        'Model': "nomodel",
        'CollectionId': this.collectionId
      });

      this.itemsService.createCollectionItem(newItem);
    }
    this.createItem.reset();
  }

  getCollectionId() {
    this.route.params.subscribe(params => {
      this.collectionId = params['id'];
    });
  }

  getFile(file: any) {
    this.errors = '';
    let extensionAllowed = ['png', 'jpeg', 'jpg']

    if (file.target.files[0].size / 1024 / 1024 > 20) {
      this.errors = "File size should be less than 20MB";
      return;
    }
    if (extensionAllowed) {
      var nam = file.target.files[0].name.split('.').pop();
      if (!extensionAllowed.includes(nam)) {
        this.errors = "Please upload " + Object.values(extensionAllowed) + " file.";
        return;
      }
    }
    this.filesServices.imageUploadFirebase(file.target.files[0]);
  }

  get itemImage() { return this.createItem.get('itemImage'); }
  get title() { return this.createItem.get('title'); }
  get CollectionId() { return this.createItem.get('categoryId'); }
}
