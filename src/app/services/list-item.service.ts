import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpParams} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ListItemService {

  favouriteAuthor = [];

  constructor(
    private http: HttpClient,
  ) { }

  getAuthors(body: any): Observable<any> {
    const headers = {};
    let params = new HttpParams();
    params = params.set('limit', body.limit);
    params = params.set('skip', body.skip);
    return this.http.get(environment.apiUrl + '/authors', {headers, params});
  }

  setLocalStorageData(data: any): void {
    if (this.favouriteAuthor.length == 0) {
      // @ts-ignore
      this.favouriteAuthor.push(data);
    }
    else {
      if (!data.isFavourite) {
        this.favouriteAuthor.forEach( element => {
          // @ts-ignore
          if (element._id === data._id) {
            // @ts-ignore
            const i = this.favouriteAuthor.findIndex((item) => item._id === element._id);
            this.favouriteAuthor.splice(i, 1);
          }
        });
      }
      else {
        // @ts-ignore
        this.favouriteAuthor.push(data);
      }
    }
    console.log(this.favouriteAuthor);
  }

  checkFavouriteValue(author: any): boolean {
    let count = 0;
    // console.log(this.favouriteAuthor);
    if (this.favouriteAuthor.length == 0) {
      return false;
    }
    else {
      // @ts-ignore
      this.favouriteAuthor.forEach( element => {
        // @ts-ignore
        console.log(element._id === author._id);
        // @ts-ignore
        if (element._id === author._id ) {
          count++;
        }
      });

      return count > 0;
    }
  }
}
