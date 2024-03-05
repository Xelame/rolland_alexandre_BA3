import { Component, OnInit } from '@angular/core';
import { EcommerceService } from '../ecommerce.service'
import { IArticle } from '../iarticle';
import { CartService } from '../cart.service';
import { IArticlePanier } from '../iarticle-panier';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-article-box',
  standalone: true,
  imports: [RouterOutlet],
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

  ngOnChanges(): void {
  }

  loadArticles = () => this.EcommerceService.getAllArticles().subscribe((data) => {
    this.articles = data
    console.log(this.articles)
  })

  getCart = () => this.CartService.getCart()

  addToCart = (article: IArticle, quantity : number) => {
    this.CartService.addToCart({
      id: article["Unique Entry ID"],
      name: article.Name,
      price: article.Buy,
      quantity: quantity,
      totalPrice: (parseInt(article.Buy) * quantity).toString()
    }, quantity)
    console.log(this.CartService.getCart())
  }

  deleteFromCart = (id: string) => {
    this.CartService.deleteFromCart(id)
  }

  ngOnDestroy(): void {
    this.loadArticles().unsubscribe()
  }
}
