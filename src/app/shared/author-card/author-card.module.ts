import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AuthorCardComponent} from './author-card.component';



@NgModule({
  declarations: [
    AuthorCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [AuthorCardComponent]
})
export class AuthorCardModule { }
