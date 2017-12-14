import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { NewsArticle } from '../_models/news-article';

@Injectable()
export class CompanyNewsService {

  constructor (private _http: HttpClient) {}

  public fetchCompanyNews() {
    return this._http.get('/api/company-news');
  }

  public fetchNewsArticle(id) {
    return this._http.get('/api/company-news/' + id);
  }

  public updateNewsArticle(data) {
    return this._http.put('/api/company-news/' + data._id, data);
  }

  public addCompanyNews(data) {
    return this._http.post('/api/company-news/add-company-news', data);
  }

  public deleteCompanyNews(id) {
    return this._http.delete('/api/company-news/' + id);
  }

}
