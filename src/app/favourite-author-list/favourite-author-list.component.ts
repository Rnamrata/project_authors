import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ListItemService} from '../services/list-item.service';

@Component({
  selector: 'app-favourite-author-list',
  templateUrl: './favourite-author-list.component.html',
  styleUrls: ['./favourite-author-list.component.scss']
})
export class FavouriteAuthorListComponent implements OnInit {
  authorsData: any;
  @Output() favAuthorValueEvent = new EventEmitter();

  constructor(
    private listItemService: ListItemService,
  ) { }

  getFavouriteAuthorData(): void {
    this.authorsData = this.listItemService.favouriteAuthor;
  }

  updateFavourite(author: any): void {
    this.favAuthorValueEvent.emit(author);
  }

  ngOnInit(): void {
    this.getFavouriteAuthorData();
  }

}
