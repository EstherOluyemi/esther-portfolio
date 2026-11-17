import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    title: 'Esther | Frontend Developer',
    loadComponent: () =>
      import('./features/home/home').then((m) => m.Home),
  },
  {
    path: 'about',
    title: 'About | Esther',
    loadComponent: () =>
      import('./features/about/about').then((m) => m.About),
  },
  {
    path: 'projects',
    title: 'Projects | Esther',
    loadComponent: () =>
      import('./features/projects/projects').then((m) => m.Projects),
  },
  {
    path: 'contact',
    title: 'Contact | Esther',
    loadComponent: () =>
      import('./features/contact/contact').then((m) => m.Contact),
  },
  {
    path: '**',
    redirectTo: '',
  },
];