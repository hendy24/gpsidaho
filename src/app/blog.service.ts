import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class BlogService {

  posts: any;

  constructor(private http: HttpClient) { }

  getPosts() {
    this.http.get('/api/posts').subscribe(data => {
      return data;
    });
  }
}
