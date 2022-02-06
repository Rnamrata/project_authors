import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListItemRoutingModule } from './list-item-routing.module';
import { FavouriteAuthorListComponent } from './favourite-author-list/favourite-author-list.component';


@NgModule({
  declarations: [FavouriteAuthorListComponent],
  imports: [
    CommonModule,
    ListItemRoutingModule
  ]
})
export class ListItemModule { }
