import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

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


  constructor(private _jobPostService: JobPostingService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.jobOpening = new JobPosting();
    if (this.route.snapshot.params['id']) {
      this.getExistingJobOpening();
      this._editJobOpening = true;
    }
  }

  private getExistingJobOpening() {
    this._id = this.route.snapshot.params['id'];
    this._jobPostService.fetchJobOpening(this._id).subscribe((data: JobPosting) => this.jobOpening = data);
  }

  public onSubmit() {
    if (this._editJobOpening) {
      this._jobPostService.updateJobOpening(this.jobOpening).subscribe((data: JobPosting) => this.jobOpening = data);
    } else {
      this._jobPostService.addJobOpening(this.jobOpening).subscribe((data: JobPosting) => this.jobOpening = data);
    }
    this.router.navigateByUrl('/dashboard/manage/job-postings');
  }

}
