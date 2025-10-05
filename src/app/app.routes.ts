import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { authGuard } from './auth/auth.guard';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./components/home/home.component').then(m => HomeComponent) },
  { path: 'login', loadComponent: () =>import('./components/authentication/login.component').then(m => m.LoginComponent) },
  { path: 'pessoas', loadComponent: () => import('./components/pessoas/pessoas.component').then(m => m.PessoasComponent), canActivate: [authGuard] },
];
