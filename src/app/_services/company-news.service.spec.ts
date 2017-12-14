import { TestBed, inject } from '@angular/core/testing';

import { CompanyNewsService } from './company-news.service';

describe('CompanyNewsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CompanyNewsService]
    });
  });

  it('should be created', inject([CompanyNewsService], (service: CompanyNewsService) => {
    expect(service).toBeTruthy();
  }));
});
