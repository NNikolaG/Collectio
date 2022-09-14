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
  { path: 'sign-in', component: SignInComponent, data: { title: 'Collēctiō | Sign-in' } },
  { path: 'register-user', component: SignUpComponent, data: { title: 'Collēctiō | Sign-up' } },
  { path: 'dashboard', component: DashboardComponent, data: { title: 'Collēctiō | Dashboard' }, canActivate: [AuthGuard] },
  { path: 'forgot-password', component: ForgotPasswordComponent, data: { title: 'Collēctiō | Password-Reset' } },
  { path: 'verify-email-address', component: VerifyEmailComponent, data: { title: 'Collēctiō | Verify-Email' } },
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
