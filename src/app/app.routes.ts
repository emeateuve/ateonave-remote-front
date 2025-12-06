import { Routes } from '@angular/router';
import { Home } from './pages/home/home/home';

export const routes: Routes = [
  { path: '', component: Home },
  { path: '*', redirectTo: '' },
];
