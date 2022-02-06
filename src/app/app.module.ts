import {CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListItemComponent } from './list-item/list-item.component';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SideBarComponent } from './side-bar/side-bar.component';
import {AuthorCardModule} from './shared/author-card/author-card.module';
import {PaginationModule} from './shared/pagination/pagination.module';

@NgModule({
  declarations: [
    AppComponent,
    ListItemComponent,
    SideBarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AuthorCardModule,
    PaginationModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]
})
export class AppModule { }
