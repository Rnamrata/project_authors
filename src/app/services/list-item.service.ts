import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {HttpClient, HttpParams} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Author} from '../interfaces/author';

@Injectable({
  providedIn: 'root'
})
export class ListItemService {

  favouriteAuthor: Author[]  = [];
  author: BehaviorSubject<Author>;

  constructor(
    private http: HttpClient,
  ) {
    this.author = new BehaviorSubject<Author>({
      _id: '',
      bio: '',
      dateAdded: '',
      dateModified: '',
      description: '',
      link: '',
      name: '',
      quoteCount: 0,
      slug: '',
      isFavourite: false
    });
  }

  setAuthorInfo(newValue: Author): void {
    this.author.next(newValue);
  }

  getAuthors(body: any): Observable<any> {
    const headers = {};
    let params = new HttpParams();
    params = params.set('limit', body.limit);
    params = params.set('skip', body.skip);
    return this.http.get(environment.apiUrl + '/authors', {headers, params});
  }

  setLocalStorageData(data: Author): void {
    if (this.favouriteAuthor.length == 0) {
      this.favouriteAuthor.push(data);
    }
    else {
      if (!data.isFavourite) {
        this.favouriteAuthor.forEach( element => {
          if (element._id === data._id) {
            const i = this.favouriteAuthor.findIndex((item) => item._id === element._id);
            this.favouriteAuthor.splice(i, 1);
          }
        });
      }
      else {
        this.favouriteAuthor.push(data);
      }
    }
  }

  checkFavouriteValue(author: any): boolean {
    let count = 0;
    if (this.favouriteAuthor.length == 0) {
      return false;
    }
    else {
      this.favouriteAuthor.forEach( element => {
        if (element._id === author._id ) {
          count++;
        }
      });
      return count > 0;
    }
  }
}
