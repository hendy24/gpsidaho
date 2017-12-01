import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DatePipe } from '@angular/common';

import { BlogService } from '../../_services/blog.service';
import { Blog } from '../../_models/blog';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  posts: any;

  constructor(private http: HttpClient, private _blogService: BlogService) {}

  ngOnInit() {
    this.http.get('/api/posts').subscribe(data => {
      this.posts = data;
      console.log(this.posts);
    });
    // this.posts = this._blogService.getPosts();
  }

}
