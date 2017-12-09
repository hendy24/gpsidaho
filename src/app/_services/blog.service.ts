import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { BlogPost } from '../_models/blog-post';

@Injectable()
export class BlogService {

  results: any;
  result: any;

  constructor(private http: HttpClient) { }

  fetchPosts(): Observable<Object> {
    return this.http.get('/api/posts').map(result => this.results = result);
  }

  fetchPost(id) {
    return this.http.get('/api/posts/' + id).map(result => this.result = result);
  }

  addPost(post: BlogPost) {
    return this.http.post('/api/posts/add-post', post).subscribe();
  }

  deletePost(_id: string) {
    return this.http.delete('/api/posts/' + _id);
  }

}
