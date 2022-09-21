import { UpdateCollectionComponent } from './components/user-panel/update-collection/update-collection.component';
import { CreateItemComponent } from './components/user-panel/create-item/create-item.component';
import { EditCollectionComponent } from './components/user-panel/edit-collection/edit-collection.component';
import { CreateCollectionComponent } from './components/user-panel/create-collection/create-collection.component';
import { MyCollectionsComponent } from './components/user-panel/my-collections/my-collections.component';
import { VerifyEmailComponent } from './components/auth/verify-email/verify-email.component';
import { ForgotPasswordComponent } from './components/auth/forgot-password/forgot-password.component';
import { DashboardComponent } from './components/auth/dashboard/dashboard.component';
import { SignUpComponent } from './components/auth/sign-up/sign-up.component';
import { SignInComponent } from './components/auth/sign-in/sign-in.component';
import { CollectionComponent } from './components/collection/collection.component';
import { AuthorComponent } from './components/author/author.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemComponent } from './components/item/item.component';
import { AuthGuard } from './services/guard/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: { title: 'Collēctiō | Home' }
  },
  {
    path: 'sign-in',
    component: SignInComponent,
    data: { title: 'Collēctiō | Sign-in' }
  },
  {
    path: 'register-user',
    component: SignUpComponent,
    data: { title: 'Collēctiō | Sign-up' }
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    data: { title: 'Collēctiō | Dashboard' },
    canActivate: [AuthGuard]
  },
  {
    path: 'forgot-password',
    component: ForgotPasswordComponent,
    data: { title: 'Collēctiō | Password-Reset' }
  },
  {
    path: 'verify-email-address',
    component: VerifyEmailComponent,
    data: { title: 'Collēctiō | Verify-Email' }
  },
  {
    path: 'collection/:title',
    component: CollectionComponent,
    data: { title: 'Collēctiō | Details' }
  },
  {
    path: 'collection/:title/:name',
    component: ItemComponent,
    data: { title: 'Collēctiō | Details' }
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
  },
  {
    path: 'my-collections',
    component: MyCollectionsComponent,
    data: { title: 'Collēctiō | My Collections' },
    canActivate: [AuthGuard]
  },
  {
    path: 'create-collection',
    component: CreateCollectionComponent,
    data: { title: 'Collēctiō | Create Collection' },
    canActivate: [AuthGuard]
  },
  {
    path: 'edit-collection/:collection',
    component: EditCollectionComponent,
    data: { title: 'Collēctiō | Edit Collection' },
    canActivate: [AuthGuard]
  },
  {
    path: 'create-item/:id',
    component: CreateItemComponent,
    data: { title: 'Collēctiō | Create Item' },
    canActivate: [AuthGuard]
  },
  {
    path: 'update-collection/:title',
    component: UpdateCollectionComponent,
    data: { title: 'Collēctiō | Update Collection' },
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
