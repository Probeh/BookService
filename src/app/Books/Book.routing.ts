import { Routes } from '@angular/router';
import { BooksComponent } from './Books.component';

const routes: Routes = [
  { path: '', component: BooksComponent, runGuardsAndResolvers: 'always', children: []},
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

export const BookRoutes = routes;