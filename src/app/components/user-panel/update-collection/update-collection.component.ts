import { Collections } from './../../../interfaces/collections';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ICategories } from 'src/app/interfaces/categories';
import { AuthService } from 'src/app/services/auth.service';
import { CategoriesService } from 'src/app/services/categories.service';
import { CollectionsServices } from 'src/app/services/collections.services';
import { FilesService } from 'src/app/services/files.service';

@Component({
  selector: 'app-update-collection',
  templateUrl: './update-collection.component.html',
  styleUrls: ['./update-collection.component.scss']
})
export class UpdateCollectionComponent implements OnInit {


  public updateCollection = new FormGroup({
    title: new FormControl('', [Validators.required]),
    categoryId: new FormControl('', [Validators.required]),
  });

  public userId!: number;
  public image!: any;
  public errors: string = '';
  private collectionTitle!: string;

  private collectionData!: any;

  public categories!: ICategories[];
  constructor(
    public collectionsService: CollectionsServices,
    private categoriesService: CategoriesService,
    private authService: AuthService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getCategories();
    this.getCollectionName();
    this.getCollectionData();
  }

  onSubmit(): void {
    if (this.updateCollection.valid && this.errors == '') {
      const newCollection = JSON.stringify({
        'Id' : this.collectionData.id,
        'Title': this.title?.value,
        'CategoryId': this.categoryId?.value,
        'BackgroundImage': null
      });

      this.collectionsService.updateCollection(newCollection);
    }
    this.updateCollection.reset();
  }

  setForm() {
    if (this.categories) {
      var catId = 0;

      this.categories.forEach(e => {
        if (e.title == this.collectionData.category) {
          catId = e.categoryId;
        }
      })

      this.updateCollection.patchValue({
        title: this.collectionData.title,
        categoryId: catId
      })
    }
  }

  getCollectionName() {
    this.route.params.subscribe(params => {
      this.collectionTitle = params['title'].replaceAll('-', ' ');
    });
  }

  getCollectionData() {
    this.collectionsService.getCollection(this.collectionTitle).subscribe(data => {
      this.collectionData = data.data[0];
      this.setForm();

    });
  }

  getCategories() {
    this.categoriesService.getCategories().subscribe((data: any) => {
      this.categories = data;
    })
  }

  get title() { return this.updateCollection.get('title'); }
  get categoryId() { return this.updateCollection.get('categoryId'); }

}
