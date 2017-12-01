import { Component, OnInit } from '@angular/core';

import { BlogService } from '../../../../_services/blog.service';
import { Blog } from '../../../../_models/blog';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  model = new Blog;
  submitted = false;

  constructor(private _blogService: BlogService) { }

  ngOnInit() {

  }

  onSubmit(e) {
    // Indicate that the form has been submitted
    this.submitted = true;

    // Assign the user that created the blog post
    // TO-DO: this needs to be updated to pull the user id from the session
    this.model.author = 'Kemish W. Hendershot';

    // Save the new blog post
    this._blogService.addPost(this.model);

  }

}
