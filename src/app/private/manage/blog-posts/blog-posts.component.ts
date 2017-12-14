import { Component, OnInit } from '@angular/core';

import { BlogService } from '../../../_services/blog.service';

@Component({
  selector: 'app-blog-posts',
  templateUrl: './blog-posts.component.html',
  styleUrls: ['./blog-posts.component.scss']
})
export class BlogPostsComponent implements OnInit {

  posts: any;

  constructor(private _blogService: BlogService) { }

  ngOnInit() {
    this._blogService.fetchPosts().subscribe(data => this.posts = data);
  }

  deletePost(id) {
    this._blogService.deletePost(id).subscribe();
  }


}
