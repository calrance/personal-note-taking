import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/notes/notes').then((m) => m.Notes),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
