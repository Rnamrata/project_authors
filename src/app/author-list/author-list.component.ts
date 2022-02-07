import { Component, OnInit } from '@angular/core';
import {ListItemService} from '../services/list-item.service';
import {Author} from '../interfaces/author';

@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.scss']
})
export class AuthorListComponent implements OnInit {

  authorsData: Author[] = [];

  dataInfo = {
    limit: 10,
    skip: 0,
    page: 1,
    totalPages: 0
  };
  navigation: string | undefined;

  constructor(
    private listItemService: ListItemService,
  ) { }

  async getAuthorsList(): Promise<void> {
    let data: any;
    try {
        data = await this.listItemService.getAuthors(this.dataInfo).toPromise();
        this.dataInfo.page = data.page;
        this.dataInfo.totalPages = data.totalPages;
        this.dataInfo.skip = data.page * this.dataInfo.limit;
        this.authorsData = data.results;
        this.setFavouriteValue();
      }
    catch (error) {
    console.log(error);
  }
  }

  navigatePage(navigation: any): void {
    this.navigation = navigation;
    if ( this.dataInfo.page != 1 && navigation == 'previous') {
      this.dataInfo.skip = this.dataInfo.skip - (this.dataInfo.limit * 2);
      this.getAuthorsList();
    }
    else if (this.dataInfo.page != this.dataInfo.totalPages && navigation == 'next') {
      this.getAuthorsList();
    }
  }

  setFavouriteValue(): void {
    this.authorsData.forEach( element => {
      element.isFavourite = this.listItemService.checkFavouriteValue(element);
    });
  }

  updateFavourite(author: any): void {
    this.authorsData.forEach( element => {
      if (element._id === author._id) {
        element.isFavourite = !element.isFavourite;
        this.listItemService.setLocalStorageData(author);
      }
    });
  }

  ngOnInit(): void {
    this.getAuthorsList();
  }

}
