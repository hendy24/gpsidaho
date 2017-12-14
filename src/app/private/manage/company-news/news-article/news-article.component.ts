import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { NewsArticle } from '../../../../_models/news-article';
import { CompanyNewsService } from '../../../../_services/company-news.service';

@Component({
  selector: 'app-news-article',
  templateUrl: './news-article.component.html',
  styleUrls: ['./news-article.component.scss'],
  providers: [CompanyNewsService]
})
export class NewsArticleComponent implements OnInit {
  private _id: string;
  private _edit: Boolean = false;
  public article: any;

  constructor(private _companyNewsService: CompanyNewsService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.article = new NewsArticle();
    if (this.route.snapshot.params['id']) {
      this.getExisting();
      this._edit = true;
    }

  }

  /*
    -------------------
    PUBLIC FUNCTIONS
    -------------------
  */

  public onSubmit() {
    if (this._edit) {
     this._companyNewsService.updateNewsArticle(this.article).subscribe((data: NewsArticle) => {
        this.article = data;
      });
    } else {
      this._companyNewsService.addCompanyNews(this.article).subscribe((data: NewsArticle) => {
        this.article = data;
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
    this._companyNewsService.fetchNewsArticle(this._id).subscribe((data: NewsArticle) => {
      this.article = data;
    });
  }

}
