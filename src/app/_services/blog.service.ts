import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { Blog } from '../_models/blog';

@Injectable()
export class BlogService {

  results: any;

  constructor(private http: HttpClient) { }

  getPosts() {
    this.http.get('/api/posts').subscribe(data => {
      this.results = data;
      console.log(this.results);
      return this.results;
    });
  }

  addPost(post: Blog) {
    return this.http.post('/api/posts/add-post', post).subscribe();
  }


  private handleError(error: Response) {
    return Observable.throw(error.statusText);
  }
}
