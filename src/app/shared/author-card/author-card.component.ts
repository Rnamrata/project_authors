import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-author-card',
  templateUrl: './author-card.component.html',
  styleUrls: ['./author-card.component.scss']
})
export class AuthorCardComponent implements OnInit {

  @Input() author: any;
  @Output() favAuthorValueEvent = new EventEmitter();

  constructor() { }

  updateFavourite(author: any): void {
    this.favAuthorValueEvent.emit(author);
  }

  ngOnInit(): void {
  }

}
