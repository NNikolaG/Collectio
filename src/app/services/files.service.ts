import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';

@Injectable({
  providedIn: 'root'
})
export class FilesService {

  private basePath: string = '/uploads';
  
  constructor(private storage: AngularFireStorage) { }

  public imageUploadFirebase(file: any) {
    const filePath = `${this.basePath}/${file.name}`;
    this.storage.ref(filePath);
    this.storage.upload(filePath, file);
  }

  public getImage(image: string) {
    var imageRef = this.storage.ref(`${this.basePath}/${image}`);
    return imageRef.getDownloadURL();
  }
}
