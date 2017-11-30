import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
// import { Blog } from '../_models/blog';

@Injectable()
export class BlogService {

  result: any;

  constructor(private http: Http) { }

//  getPosts(): Observable<Blog[]> {
////    return this.http
////      .get('/api/posts')
////      .map((response: Response) => {
////        return <Blog[]>response.json();
////      })
////      .catch(this.handleError);
//  }

  private handleError(error: Response) {
    return Observable.throw(error.statusText);
  }
}
