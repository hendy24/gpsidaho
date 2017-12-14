import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router'; import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

import { NewsArticle } from '../../../../_models/news-article';
import { CompanyNewsService } from '../../../../_services/company-news.service';

@Component({
  selector: 'app-news-article',
  templateUrl: './news-article.component.html',
  styleUrls: ['./news-article.component.scss'],
  providers: [CompanyNewsService]
})
export class NewsArticleComponent implements OnInit, OnDestroy {
  private _id: string;
  private _edit: Boolean = false;
  public article: NewsArticle;
  private subsciption: Subscription;
  private subscriptionActive: Boolean = false;

  constructor(private _companyNewsService: CompanyNewsService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.article = new NewsArticle();
    if (this.route.snapshot.params['id']) {
      this.getExisting();
      this._edit = true;
    }

  }

  ngOnDestroy() {
    if (this.subscriptionActive) {
      this.subsciption.unsubscribe();
    }
  }

  /*
    -------------------
    PUBLIC FUNCTIONS
    -------------------
  */

  public onSubmit() {
    if (this._edit) {
      this.subsciption = this._companyNewsService.updateNewsArticle(this.article).subscribe((data: NewsArticle) => {
        this.article = data;
        this.subscriptionActive = true;
      });
    } else {
      this._companyNewsService.addCompanyNews(this.article).subscribe((data: NewsArticle) => {
        this.article = data;
        this.subscriptionActive = true;
      });
    }

    this.router.navigateByUrl('/dashboard/manage/company-news');
  }



  /*
    -------------------
    PRIVATE FUNCTIONS
    -------------------
  */


  private getExisting() {
    this._id = this.route.snapshot.params['id'];
    this.subsciption = this._companyNewsService.fetchNewsArticle(this._id).subscribe((data: NewsArticle) => {
      this.article = data;
      console.log(data);
    });
    this.subscriptionActive = true;
  }

}
