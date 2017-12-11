import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BlogService } from '../../../_services/blog.service';

@Component({
  selector: 'app-blog-posts',
  templateUrl: './blog-posts.component.html',
  styleUrls: ['./blog-posts.component.scss']
})
export class BlogPostsComponent implements OnInit {

  posts: any;

  constructor(private http: HttpClient, private _blogService: BlogService) { }

  ngOnInit() {
    this._blogService.fetchPosts().subscribe(data => this.posts = data);
  }

  deletePost(id) {
    console.log(id);
    this._blogService.deletePost(id);
    // need to make the item disappear after it is removed
  }

}
