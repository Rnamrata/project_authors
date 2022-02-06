import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {

  constructor(
    private router: Router,
  ) { }

  async navigateTap(tab?: string): Promise<void> {
    console.log(tab);
    if (tab == 'favourite') {
      await this.router.navigate(['/favourite_author']
      );
    } else if (tab == 'authors') {
      await this.router.navigate(['/authors']);
    }
  }

  ngOnInit(): void {
  }

}
