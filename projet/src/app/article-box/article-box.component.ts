import { Component, OnInit } from '@angular/core';
import { EcommerceService } from '../ecommerce.service'
import { IArticle } from '../iarticle';

@Component({
  selector: 'app-article-box',
  standalone: true,
  imports: [],
  templateUrl: './article-box.component.html',
  styleUrl: './article-box.component.css'
})
export class ArticleBoxComponent implements OnInit {

  public articles : IArticle[]

  constructor(private EcommerceService : EcommerceService) { 
    this.articles = []
  }

  ngOnInit(): void {
    this.loadArticles();
  }

  loadArticles = () => this.EcommerceService.getAllArticles().subscribe((data) => {
    this.articles = data
    console.log(this.articles)
  })
}
