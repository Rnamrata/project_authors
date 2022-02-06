import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthorListRoutingModule } from './author-list-routing.module';
import { FavouriteAuthorListComponent } from '../favourite-author-list/favourite-author-list.component';
import {ListItemModule} from '../shared/list-item/list-item.module';
import {PaginationModule} from '../shared/pagination/pagination.module';

@NgModule({
  declarations: [FavouriteAuthorListComponent],
  imports: [
    CommonModule,
    AuthorListRoutingModule,
    ListItemModule,
    PaginationModule
  ]
})
export class AuthorListModule { }
