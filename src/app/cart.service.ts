import { Injectable } from "@angular/core";

import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class CartService {
  items = [];

  constructor(private http: HttpClient) {}

  addToCart(product) {
    this.items.push(product);
    const list = JSON.parse(localStorage.getItem("list"));
    if (list !== null) {
      let newList = list.concat(this.items);
      localStorage.setItem("list", JSON.stringify(newList));
    } else {
      localStorage.setItem("list", JSON.stringify(this.items));
    }
  }

  getItems() {
    return JSON.parse(localStorage.getItem("list"));
    console.log(JSON.parse(localStorage.getItem("list")));
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  getShippingPrices() {
    return this.http.get("/assets/shipping.json");
  }
}
