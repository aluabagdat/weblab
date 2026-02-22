import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { Category } from '../models/category.model';
import { PRODUCTS, CATEGORIES } from '../data/products.data';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  getCategories(): Category[] {
    return CATEGORIES;
  }

  getProductsByCategory(categoryId: number): Product[] {
    return PRODUCTS.filter(p => p.categoryId === categoryId);
  }

  like(product: Product): void {
    product.likes++;
  }
}
