import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: 'home', loadComponent: () => import('./presentation/pages/home/home').then(m => m.Home) },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', loadComponent: () => import('./presentation/pages/not-found/not-found').then(m => m.NotFound) }
];
