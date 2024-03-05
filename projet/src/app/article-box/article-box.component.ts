import { Component, OnInit } from '@angular/core';
import { EcommerceService } from '../ecommerce.service'
import { IArticle } from '../iarticle';
import { CartService } from '../cart.service';
import { IArticlePanier } from '../iarticle-panier';

@Component({
  selector: 'app-article-box',
  standalone: true,
  imports: [],
  templateUrl: './article-box.component.html',
  styleUrl: './article-box.component.css'
})
export class ArticleBoxComponent implements OnInit {

  public articles : IArticle[]

  public cart : IArticlePanier[]

  constructor(private EcommerceService : EcommerceService, private CartService : CartService) { 
    this.articles = []
    this.cart = []
  }

  ngOnInit(): void {
    this.loadArticles();
    this.cart = this.CartService.getCart()
  }

  loadArticles = () => this.EcommerceService.getAllArticles().subscribe((data) => {
    this.articles = data
    console.log(this.articles)
  })

  getCart = () => console.log(this.CartService.getCart())

  addToCart = (article: IArticle, quantity : number) => {
    this.CartService.addToCart(article, quantity)
    console.log(this.CartService.getCart())
  }
}
