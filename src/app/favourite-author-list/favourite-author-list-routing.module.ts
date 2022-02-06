import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FavouriteAuthorListComponent} from './favourite-author-list.component';

const routes: Routes = [
  {
    path: '',
    component: FavouriteAuthorListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FavouriteAuthorListRoutingModule { }
