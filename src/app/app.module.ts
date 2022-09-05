import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from "@angular/fire/compat";
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LogoComponent } from './components/elements/logo/logo.component';

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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoComponent,
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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    ReactiveFormsModule, 
    HttpClientModule,
  ],
  providers: [Title],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
