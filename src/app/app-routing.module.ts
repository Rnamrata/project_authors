import { NgModule } from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {ListItemModule} from './list-item/list-item.module';

const routes: Routes = [
  {
    path: 'authors',
    loadChildren: () => import('./list-item/list-item.module').then(m => m.ListItemModule),
  },
  {
    path: 'authors/:favourite',
    loadChildren: () => import('./list-item/favourite-author-list/favourite-author-list.module').then(m => m.FavouriteAuthorListModule),
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
