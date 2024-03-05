import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { IArticlePanier } from '../iarticle-panier';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-article-panier',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './article-panier.component.html',
  styleUrl: './article-panier.component.css'
})
export class ArticlePanierComponent {


  public total : number

  constructor(private CartService : CartService) { 
    this.total = 0
  }

  ngOnInit(): void {
    this.total = this.CartService.getTotalPrice()
  }

  updateTotal = () => {
    this.total = this.CartService.getTotalPrice()
    return this.total
  }

  public getCart = () => this.CartService.getCart()

  addToCart = (article: IArticlePanier, quantity : number) => {
    this.CartService.addToCart(article, quantity)
  }

  clearCart = () => {
    this.CartService.clearCart()
    this.total = this.CartService.getTotalPrice()
  }

  deleteFromCart = (id: string) => {
    this.CartService.deleteFromCart(id)
    this.total = this.CartService.getTotalPrice()
  }
}
