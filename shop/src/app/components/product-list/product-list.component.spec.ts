import { Component, Input, OnChanges } from '@angular/core';
import { Product } from '../../models/product.model';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html'
})
export class ProductListComponent implements OnChanges {
  @Input() categoryId!: number;
  products: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnChanges(): void {
    this.products = this.productService.getProductsByCategory(this.categoryId);
  }

  like(product: Product): void {
    this.productService.like(product);
  }
}
