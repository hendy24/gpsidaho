import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BlogService } from '../blog.service';
import { Blog } from '../blog';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  posts: any;

  constructor(private http: HttpClient, private blogService: BlogService) {
   }

  ngOnInit(): void {
    this.http.get('/api/posts').subscribe(data => {
      this.posts = data;
      console.log(this.posts);
    });
    // this.posts = this.blogService.getPosts();
  }

}
