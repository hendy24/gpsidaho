import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { BlogService } from '../../../_services/blog.service';

@Component({
  selector: 'app-blog-posts',
  templateUrl: './blog-posts.component.html',
  styleUrls: ['./blog-posts.component.scss']
})
export class BlogPostsComponent implements OnInit, OnDestroy {
  private blogPostSubscription: Subscription;

  posts: any;

  constructor(private _blogService: BlogService) { }

  ngOnInit() {
    this.blogPostSubscription = this._blogService.fetchPosts().subscribe(data => this.posts = data);
  }

  deletePost(id) {
    console.log(id);
    this.blogPostSubscription = this._blogService.deletePost(id).subscribe();
    // need to make the item disappear after it is removed
  }

  ngOnDestroy() {
    this.blogPostSubscription.unsubscribe();
  }

}
