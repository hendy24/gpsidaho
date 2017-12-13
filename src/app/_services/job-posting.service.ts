import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { JobPosting } from '../_models/job-posting';

@Injectable()
export class JobPostingService {
  results: any;

  constructor(private http: HttpClient) { }

//   public addJobOpening(post: JobPosting) {
//     return this.http.post('/api/job-postings/job-post', post);
//   }

//   public fetchJobPosts() {
//     return this.http.get('/api/job-postings');
//   }

//   public deleteJobPosting(id) {
//     return this.http.delete('/api/job-postings/job-post/' + id);
//   }

//   public fetchJobOpening(id) {
//     return this.http.get('/api/job-postings/' + id);
//   }

//   public updateJobOpening(data) {
//     return this.http.put('/api/job-postings/job-post/' + data._id, data);
//   }
// }
