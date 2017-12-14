import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { JobPosting } from '../../../_models/job-posting';
import { JobPostingService } from '../../../_services/job-posting.service';

@Component({
  selector: 'app-job-postings',
  templateUrl: './job-postings.component.html',
  styleUrls: ['./job-postings.component.scss'],
  providers: [JobPostingService]
})
export class JobPostingsComponent implements OnInit, OnDestroy {

  private subscription: Subscription;
  private subscriptionActive: Boolean = false;
  public jobPosts: any;

  constructor(private _jobPostingService: JobPostingService) {}

  ngOnInit() {
    // get all the current job postings
    this.subscription = this._jobPostingService.fetchJobPosts().subscribe(data => this.jobPosts = data);
    this.subscriptionActive = true;
  }

  public deleteJobPosting(id) {
    this._jobPostingService.deleteJobPosting(id).subscribe(data => this.jobPosts = data);
    this.subscriptionActive = true;
  }

  ngOnDestroy() {
    if (this.subscriptionActive) {
      this.subscription.unsubscribe();
    }
  }

}
