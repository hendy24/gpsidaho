import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { BlogService } from '../../_services/blog.service';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.scss'],
  providers: [BlogService]
})
export class BlogDetailsComponent implements OnInit {

  post: any;

  constructor(private _blogService: BlogService, private route: ActivatedRoute) { }

  ngOnInit() {
    var id = this.route.snapshot.params['id'];
    this._blogService.fetchPost(id).subscribe(data => this.post = data);
  }

}
