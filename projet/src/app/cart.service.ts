import { Injectable } from '@angular/core';
import { IArticlePanier } from './iarticle-panier';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cart : IArticlePanier[] = [];

  getCart() {
    return this.cart
  }

  addToCart(article: IArticlePanier, quantity: number) {
    if (quantity <= 0) {
      return
    }
    if (article.price === "NFS") {
      return
    }
    if (this.cart.find((item) => item.id === article.id)) {
      this.cart = this.cart.map((item) => {
        if (item.id === article.id) {
          item.quantity += quantity
          item.totalPrice = (parseInt(article.price) * item.quantity).toString()
        }
        return item
      })
    }
    else {
      this.cart.push(article)
    }
  }

  getTotalPrice() {
    return this.cart.reduce((acc, item) => acc + parseInt(item.totalPrice), 0)
  }

  clearCart() {
    this.cart = []
  }

  deleteFromCart(id: string) {
    this.cart = this.cart.filter((item) => item.id !== id)
  }

}
