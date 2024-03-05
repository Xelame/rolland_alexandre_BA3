import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IArticle } from './iarticle';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EcommerceService {

  constructor(private http: HttpClient) { }

  private apiRoutes: any = {
    articles: "https://www.eleguen.ovh/api/v1/articles"
  }

  public getAllArticles() : Observable<IArticle[]> {
    return this.http.get<IArticle[]>(this.apiRoutes.articles).pipe(map((data: any) => data));
  }
}