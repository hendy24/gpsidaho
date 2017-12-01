import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-blog-posts',
  templateUrl: './blog-posts.component.html',
  styleUrls: ['./blog-posts.component.scss']
})
export class BlogPostsComponent implements OnInit {

  posts: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('/api/posts').subscribe(data => {
      this.posts = data;
      console.log(this.posts);
    });
  }

}
