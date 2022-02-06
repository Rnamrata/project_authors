import { NgModule } from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {AuthorListModule} from './author-list/author-list.module';

const routes: Routes = [
  {
    path: 'authors',
    loadChildren: () => import('./author-list/author-list.module').then(m => m.AuthorListModule),
  },
  {
    path: 'favourite_author',
    loadChildren: () => import('./favourite-author-list/favourite-author-list.module').then(m => m.FavouriteAuthorListModule),
  },
  {
    path: '',
    redirectTo: 'authors',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'authors'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled',
    enableTracing: false,
    useHash: false,
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
