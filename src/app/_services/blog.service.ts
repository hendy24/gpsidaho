import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { BlogPost } from '../_models/blog-post';

@Injectable()
export class BlogService {

  results: any;
  result: any;

  constructor(private http: HttpClient) { }

  public fetchPosts(numPosts = null): Observable<Object> {
    return this.http.get('/api/posts/?numPosts=' + numPosts);
  }

  public fetchPost(id): Observable<Object> {
    return this.http.get('/api/posts/' + id);
  }

  public addPost(post) {
    return this.http.post('/api/posts/add-post', post);
  }

  public updatePost(post) {
    return this.http.put('/api/posts/' + post._id, post);
  }

  public deletePost(_id: string) {
    return this.http.delete('/api/posts/' + _id);
  }

}
