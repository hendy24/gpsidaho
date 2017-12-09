import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { JobPost } from '../_models/job-post';

@Injectable()
export class JobPostService {
  results: any;

  constructor(private http: HttpClient) { }

  addJobOpening(post: JobPost) {
    return this.http.post('/api/job-openings/add-job-opening', post).subscribe();
  }

}
