import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from "@angular/fire/compat";
import { AngularFireDatabaseModule} from '@angular/fire/compat/database';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LogoComponent } from './components/elements/logo/logo.component';

import { BannerComponent } from './components/home/banner/banner.component';
import { FungusTableComponent } from './components/home/fungus-table/fungus-table.component';
import { FungusComponent } from './components/home/fungus-table/fungus/fungus.component';
import { HomeComponent } from './components/home/home.component';
import { environment } from 'src/environments/environment';
import { FungusDetailsComponent } from './components/fungus-details/fungus-details.component';
import { MainComponent } from './components/home/main/main.component';
import { FooterComponent } from './components/footer/footer.component';
import { InfoComponentComponent } from './components/fungus-details/info-component/info-component.component';
import { FunFactsComponent } from './components/home/main/fun-facts/fun-facts.component';
import { FunOneComponent } from './components/home/main/fun-facts/fun-one/fun-one.component';
import { FunTwoComponent } from './components/home/main/fun-facts/fun-two/fun-two.component';
import { FunThreeComponent } from './components/home/main/fun-facts/fun-three/fun-three.component';
import { AboutComponent } from './components/about/about.component';
import { AuthorComponent } from './components/author/author.component';
import { TimelineComponent } from './components/author/timeline/timeline.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoComponent,
    BannerComponent,
    FungusTableComponent,
    FungusComponent,
    HomeComponent,
    FungusDetailsComponent,
    MainComponent,
    FooterComponent,
    InfoComponentComponent,
    FunFactsComponent,
    FunOneComponent,
    FunTwoComponent,
    FunThreeComponent,
    AboutComponent,
    AuthorComponent,
    TimelineComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    HttpClientModule
  ],
  providers: [Title],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
