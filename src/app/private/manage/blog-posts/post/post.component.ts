import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { BlogService } from '../../../../_services/blog.service';
import { BlogPost } from '../../../../_models/blog-post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
  providers: [BlogService]
})
export class PostComponent implements OnInit {
  private _editPost: Boolean = false;
  private _id: string = null;
  public post: BlogPost;

  constructor(private _blogService: BlogService, private route: ActivatedRoute, private router: Router) {}


  ngOnInit() {
    this.post = new BlogPost();
    // if the id is in the url then set the id and fetch the existing blog post to edit
    if (this.route.snapshot.params['id']) {
       this.getExistingPost();
       this._editPost = true;
    }
  }


  private getExistingPost() {
    this._id = this.route.snapshot.params['id'];
    this._blogService.fetchPost(this._id).subscribe((data: BlogPost) => {
      this.post = data;
    });
  }

  onSubmit() {
    // Indicate that the form has been submitted

    // Assign the user that created the blog post
    // TO-DO: this needs to be updated to pull the user id from the session

    // Save the new blog post
    console.log(this.post);

    if (this._editPost) {
      this._blogService.updatePost(this.post);
    } else {
      this._blogService.addPost(this.post);
    }

    this.router.navigateByUrl('/dashboard/manage/blog-posts');
  }

}
