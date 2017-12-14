import { Component, OnInit } from '@angular/core';

import { NewsArticle } from '../../../_models/news-article';
import { CompanyNewsService } from '../../../_services/company-news.service';

@Component({
  selector: 'app-company-news',
  templateUrl: './company-news.component.html',
  styleUrls: ['./company-news.component.scss'],
  providers: [CompanyNewsService]
})
export class CompanyNewsComponent implements OnInit {

  public newsArticle: any;

  constructor(private _companyNewsService: CompanyNewsService) { }

  ngOnInit() {
    this._companyNewsService.fetchCompanyNews().subscribe(data => this.newsArticle = data);
  }


  public deleteCompanyNews(id) {
    this._companyNewsService.deleteCompanyNews(id).subscribe(data => this.newsArticle = data);
  }

}
