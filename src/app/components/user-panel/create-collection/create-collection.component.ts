import { FilesService } from './../../../services/files.service';
import { AuthService } from 'src/app/services/auth.service';
import { ICategories } from './../../../interfaces/categories';
import { CategoriesService } from './../../../services/categories.service';
import { CollectionsServices } from 'src/app/services/collections.services';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-collection',
  templateUrl: './create-collection.component.html',
  styleUrls: ['./create-collection.component.scss']
})
export class CreateCollectionComponent implements OnInit {

  public createCollection = new FormGroup({
    title: new FormControl('', [Validators.required]),
    categoryId: new FormControl('', [Validators.required]),
    backgroundImage: new FormControl('', [Validators.required])
  });

  public userId!: number;
  public image!: any;
  public errors: string = '';

  public categories!: ICategories[];
  constructor(
    public collectionsService: CollectionsServices,
    private categoriesService: CategoriesService,
    private filesService: FilesService,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.getUserId();
    this.getCategories();
  }

  onSubmit(): void {
    if (this.createCollection.valid && this.errors == '') {
      const image = this.backgroundImage?.value.split("\\")[2];
      const newCollection = JSON.stringify({
        'Title': this.title?.value,
        'BackgroundImage': image,
        'CategoryId': this.categoryId?.value,
        'UserId': this.userId
      });

      this.collectionsService.createCollection(newCollection);
    }
    this.createCollection.reset();
  }

  getCategories() {
    this.categoriesService.getCategories().subscribe((data: any) => {
      this.categories = data;
    })
  }

  getUserId() {
    const email = JSON.parse(localStorage.getItem('user')!).email;
    this.authService.getUserId(email).subscribe(data => {
      this.userId = data.id;
    })
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
    this.filesService.imageUploadFirebase(file.target.files[0]);
  }

  get backgroundImage() { return this.createCollection.get('backgroundImage'); }
  get title() { return this.createCollection.get('title'); }
  get categoryId() { return this.createCollection.get('categoryId'); }

}
