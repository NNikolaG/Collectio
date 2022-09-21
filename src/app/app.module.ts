import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from "@angular/fire/compat";
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';


import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';

import { BannerComponent } from './components/home/banner/banner.component';
import { HomeComponent } from './components/home/home.component';
import { environment } from 'src/environments/environment';
import { FooterComponent } from './components/footer/footer.component';
import { AboutComponent } from './components/about/about.component';
import { AuthorComponent } from './components/author/author.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CollectionsComponent } from './components/home/collections/collections.component';
import { SingleCollectionComponent } from './components/home/collections/single-collection/single-collection.component';
import { CollectionComponent } from './components/collection/collection.component';
import { CollectionItemComponent } from './components/collection/collection-item/collection-item.component';
import { ItemComponent } from './components/item/item.component';
import { ItemInfosComponent } from './components/item/item-infos/item-infos.component';
import { DashboardComponent } from './components/auth/dashboard/dashboard.component';
import { SignInComponent } from './components/auth/sign-in/sign-in.component';
import { SignUpComponent } from './components/auth/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './components/auth/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './components/auth/verify-email/verify-email.component';
import { AuthService } from './services/auth.service';
import { MyCollectionsComponent } from './components/user-panel/my-collections/my-collections.component';
import { CreateCollectionComponent } from './components/user-panel/create-collection/create-collection.component';
import { EditCollectionComponent } from './components/user-panel/edit-collection/edit-collection.component';
import { CreateItemComponent } from './components/user-panel/create-item/create-item.component';
import { UpdateCollectionComponent } from './components/user-panel/update-collection/update-collection.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    HomeComponent,
    FooterComponent,
    AboutComponent,
    AuthorComponent,
    CollectionItemComponent,
    CollectionsComponent,
    SingleCollectionComponent,
    CollectionComponent,
    ItemComponent,
    ItemInfosComponent,
    DashboardComponent,
    SignInComponent,
    SignUpComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent,
    MyCollectionsComponent,
    CreateCollectionComponent,
    EditCollectionComponent,
    CreateItemComponent,
    UpdateCollectionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    AngularFireStorageModule
  ],
  providers: [Title, AuthService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
