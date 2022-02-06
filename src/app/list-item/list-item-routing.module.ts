import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListItemComponent} from './list-item.component';
import {FavouriteAuthorListComponent} from '../favourite-author-list/favourite-author-list.component';

const routes: Routes = [
  {
    path: '',
    component: ListItemComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListItemRoutingModule { }
