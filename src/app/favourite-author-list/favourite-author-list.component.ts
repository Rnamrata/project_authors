import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ListItemService} from '../services/list-item.service';

@Component({
  selector: 'app-favourite-author-list',
  templateUrl: './favourite-author-list.component.html',
  styleUrls: ['./favourite-author-list.component.scss']
})
export class FavouriteAuthorListComponent implements OnInit {
  authorsData: any;
  showData: any;
  @Output() favAuthorValueEvent = new EventEmitter();
  dataInfo = {
    limit: 10,
    skip: 0,
    page: 1,
    totalPages: 0
  };

  constructor(
    private listItemService: ListItemService,
  ) { }

  getFavouriteAuthorData(): void {
    this.authorsData = this.listItemService.favouriteAuthor;
    this.dataInfo.totalPages = Math.ceil((this.authorsData.length / this.dataInfo.limit));
    this.navigatePage();
  }

  updateFavourite(author: any): void {
    this.authorsData.forEach( (item: any) => {
      if (item._id === author._id) {
        item.isFavourite = !item.isFavourite;
        const i = this.authorsData.findIndex((data: any) => data._id === item._id);
        this.authorsData.splice(i, 1);
        this.navigatePage();
        this.listItemService.setLocalStorageData(author);
      }
    });
  }

  navigatePage(navigation?: any): void {
    if (this.dataInfo.page != 1 && navigation == 'previous') {
      this.dataInfo.skip = this.dataInfo.skip - this.dataInfo.limit;
      this.dataInfo.page--;
    }else if (this.dataInfo.page != this.dataInfo.totalPages && navigation == 'next') {
      this.dataInfo.skip = this.dataInfo.page * this.dataInfo.limit;
      this.dataInfo.page++;
    }
    if (this.dataInfo.page === this.dataInfo.totalPages){
      this.showData = this.authorsData.slice(this.dataInfo.skip, this.authorsData.length);
    }
    else {
      this.showData = this.authorsData.slice(this.dataInfo.skip, (this.dataInfo.skip + this.dataInfo.limit));
    }
  }

  ngOnInit(): void {
    this.getFavouriteAuthorData();
  }

}
