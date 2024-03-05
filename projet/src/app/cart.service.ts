import { Injectable } from '@angular/core';
import { IArticlePanier } from './iarticle-panier';
import { IArticle } from './iarticle';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cart : IArticlePanier[] = [];

  getCart() {
    return this.cart
  }

  addToCart(article: IArticle, quantity: number) {
    if (quantity <= 0) {
      return
    }
    if (article['Buy'] === "NFS") {
      return
    }
    if (this.cart.find((item) => item.id === article['Unique Entry ID'])) {
      this.cart = this.cart.map((item) => {
        if (item.id === article['Unique Entry ID']) {
          item.quantity += quantity
          item.totalPrice = (parseInt(article['Buy']) * item.quantity).toString()
        }
        return item
      })
    }
    else {
      this.cart.push({
        id: article['Unique Entry ID'],
        name: article['Name'],
        price: article['Buy'],
        quantity: quantity,
        totalPrice: (parseInt(article['Buy']) * quantity).toString()
      })
    }
  }
}
