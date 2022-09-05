import { CollectionComponent } from './components/collection/collection.component';
import { AuthorComponent } from './components/author/author.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemComponent } from './components/item/item.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: { title: 'Collēctiō | Home' }
  },
  {
    path: 'collection/:title',
    component: CollectionComponent,
    data: { title: 'Collēctiō | Details' }
  },
  {
    path: 'collection/:title/:name',
    component: ItemComponent,
    data : {title: 'Collēctiō | Details'}
  },
  {
    path: 'about',
    component: AboutComponent,
    data: { title: 'Collēctiō | About' }
  },
  {
    path: 'author',
    component: AuthorComponent,
    data: { title: 'Nikola Gutic' }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
