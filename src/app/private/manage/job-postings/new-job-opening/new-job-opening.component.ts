import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { JobPostingService } from '../../../../_services/job-posting.service';
import { JobPosting } from '../../../../_models/job-posting';

@Component({
  selector: 'app-new-job-opening',
  templateUrl: './new-job-opening.component.html',
  styleUrls: ['./new-job-opening.component.scss'],
  providers: [JobPostingService]
})
export class NewJobOpeningComponent implements OnInit {
  public submitted = false;
  public jobOpening: any;
  private _editJobOpening: Boolean = false;
  private _id: string = null;
  private subscription: Subscription;
  private subscriptionActive: Boolean = false;


  constructor(private _jobPostService: JobPostingService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.jobOpening = new JobPosting();
    if (this.route.snapshot.params['id']) {
      this.getExistingJobOpening();
      this._editJobOpening = true;
      this.subscriptionActive = true;
    }
  }

  private getExistingJobOpening() {
    this._id = this.route.snapshot.params['id'];
    this.subscription = this._jobPostService.fetchJobOpening(this._id).subscribe((data: JobPosting) => this.jobOpening = data);
    this.subscriptionActive = true;
  }

  public onSubmit() {
    if (this._editJobOpening) {
      this.subscription = this._jobPostService.updateJobOpening(this.jobOpening).subscribe((data: JobPosting) => this.jobOpening = data);
    } else {
      this.subscription = this._jobPostService.addJobOpening(this.jobOpening).subscribe((data: JobPosting) => this.jobOpening = data);
    }
    this.subscriptionActive = true;
    this.router.navigateByUrl('/dashboard/manage/job-postings');
  }

}
