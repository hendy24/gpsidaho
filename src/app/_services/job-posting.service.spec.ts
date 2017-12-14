import { TestBed, inject } from '@angular/core/testing';

import { JobPostService } from './job-post.service';

describe('JobPostService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JobPostService]
    });
  });

  it('should be created', inject([JobPostService], (service: JobPostService) => {
    expect(service).toBeTruthy();
  }));
});
