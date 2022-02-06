import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FavouriteAuthorListRoutingModule } from './favourite-author-list-routing.module';
import {ListItemModule} from '../shared/list-item/list-item.module';
import {PaginationModule} from '../shared/pagination/pagination.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FavouriteAuthorListRoutingModule,
    ListItemModule,
    PaginationModule
  ]
})
export class FavouriteAuthorListModule { }
