import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

  @Input() page: any;
  @Output() pageNavigationEvent = new EventEmitter();
  constructor() { }

  navigatePage(navigation: string): void {
    this.pageNavigationEvent.emit(navigation);
  }

  ngOnInit(): void {
  }

}
