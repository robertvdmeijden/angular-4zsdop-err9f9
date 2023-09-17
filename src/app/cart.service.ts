import { Injectable } from '@angular/core';
import { Product } from './products';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: Product[] = [];
  constructor() {}

  addProduct(product: Product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearProduct() {
    this.items = [];
    return this.items;
  }
}
