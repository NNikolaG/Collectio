import { AuthorComponent } from './components/author/author.component';
import { AboutComponent } from './components/about/about.component';
import { FungusDetailsComponent } from './components/fungus-details/fungus-details.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: { title: 'Fungus | Home' }
  },
  {
    path: 'fungus-details/:name',
    component: FungusDetailsComponent,
    data: { title: 'Fungus | Details' }
  }, 
  {
    path: 'about',
    component: AboutComponent,
    data: { title: 'Fungus | About' }
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
