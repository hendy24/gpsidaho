import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { BlogService } from '../../../../_services/blog.service';
import { BlogPost } from '../../../../_models/blog-post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
  providers: [BlogService]
})
export class PostComponent implements OnInit {
  constructor(private _blogService: BlogService, private route: ActivatedRoute) { }

  submitted = false;
  id: string;
  model: any;

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this._blogService.fetchPost(this.id).subscribe(data => {
      this.model = data;
    });
  }


  onSubmit() {
    // Indicate that the form has been submitted
    this.submitted = true;

    // Assign the user that created the blog post
    // TO-DO: this needs to be updated to pull the user id from the session
    // this.model.author = 'Kemish W. Hendershot';

    // Save the new blog post
    // this._blogService.addPost(this.model);

  }

}
