import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FavouriteAuthorListRoutingModule } from './favourite-author-list-routing.module';
import {AuthorCardModule} from '../shared/author-card/author-card.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FavouriteAuthorListRoutingModule,
    AuthorCardModule
  ]
})
export class FavouriteAuthorListModule { }
