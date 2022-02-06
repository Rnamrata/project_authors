import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListItemRoutingModule } from './list-item-routing.module';
import { FavouriteAuthorListComponent } from '../favourite-author-list/favourite-author-list.component';
import {AuthorCardModule} from '../shared/author-card/author-card.module';
import {PaginationModule} from '../shared/pagination/pagination.module';

@NgModule({
  declarations: [FavouriteAuthorListComponent],
  imports: [
    CommonModule,
    ListItemRoutingModule,
    AuthorCardModule,
    PaginationModule
  ]
})
export class ListItemModule { }
