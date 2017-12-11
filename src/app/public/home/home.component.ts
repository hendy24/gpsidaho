import { Component, OnInit } from '@angular/core';

import { BlogService } from '../../_services/blog.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [BlogService]
})
export class HomeComponent implements OnInit {

  posts: any;

  constructor(private _blogService: BlogService) { }

  ngOnInit() {
    this._blogService.fetchPosts(3).subscribe(data => this.posts = data);
  }

}
