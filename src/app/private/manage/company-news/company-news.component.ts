import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { NewsArticle } from '../../../_models/news-article';
import { CompanyNewsService } from '../../../_services/company-news.service';

@Component({
  selector: 'app-company-news',
  templateUrl: './company-news.component.html',
  styleUrls: ['./company-news.component.scss'],
  providers: [CompanyNewsService]
})
export class CompanyNewsComponent implements OnInit, OnDestroy {

  private subscription: Subscription;
  private subscriptionActive: Boolean = false;
  public newsArticle: NewsArticle;

  constructor(private _companyNewsService: CompanyNewsService) { }

  ngOnInit() {
    this.subscription = this._companyNewsService.fetchCompanyNews().subscribe((data: NewsArticle) => {
      this.newsArticle = data;
      console.log(data);
    });
    this.subscriptionActive = true;
  }

  ngOnDestroy() {
    if (this.subscriptionActive) {
      this.subscription.unsubscribe();
    }
  }

}
