import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {

  @Input() author: any;
  @Output() favAuthorValueEvent = new EventEmitter();

  constructor() { }

  updateFavourite(author: any): void {
    this.favAuthorValueEvent.emit(author);
  }

  ngOnInit(): void {
  }

}
