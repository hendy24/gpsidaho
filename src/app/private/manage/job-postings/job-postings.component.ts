import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { JobPosting } from '../../../_models/job-posting';
import { JobPostingService } from '../../../_services/job-posting.service';

@Component({
  selector: 'app-job-postings',
  templateUrl: './job-postings.component.html',
  styleUrls: ['./job-postings.component.scss']
})
export class JobPostingsComponent implements OnInit, OnDestroy {

  private JobPostSubscription: Subscription;
  public jobPosts: any;

  constructor(private _jobPostingService: JobPostingService) {}

  ngOnInit() {
    // get all the current job postings
    this._jobPostingService.fetchJobPosts().subscribe(data => this.jobPosts = data);
  }

  public deleteJobPosting(id) {
    this._jobPostingService.deleteJobPosting(id).subscribe(data => this.jobPosts = data);
  }

  ngOnDestroy() {

  }

}
