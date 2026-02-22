import { Component, Input } from '@angular/core';
import { Product } from '../../models/product.model';
import { CommonModule } from '@angular/common';
import { ProductItemComponent } from '../../product-item/product-item.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductItemComponent],
  templateUrl: './product-list.component.html'
})
export class ProductListComponent {
  @Input() products: Product[] = [];
  @Input() categoryId: number | null = null;  // <- вот добавляем сюда

  get filteredProducts(): Product[] {
    if (this.categoryId === null) return this.products;
    return this.products.filter(p => p.categoryId === this.categoryId);
  }

  removeProduct(id: number) {
    this.products = this.products.filter(p => p.id !== id);
  }
}
