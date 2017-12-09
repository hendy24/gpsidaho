import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { JobPostService } from '../../../../_services/job-post.service';
import { JobPost } from '../../../../_models/job-post';

@Component({
  selector: 'app-new-job-opening',
  templateUrl: './new-job-opening.component.html',
  styleUrls: ['./new-job-opening.component.scss']
})
export class NewJobOpeningComponent implements OnInit {
  submitted = false;
  private model = new JobPost;

  constructor(private _jobPostService: JobPostService, private router: ActivatedRoute) { }

  ngOnInit() {
  }

  onSubmit() {
    this.submitted = true;
    this._jobPostService.addJobOpening(this.model);
  }

}
