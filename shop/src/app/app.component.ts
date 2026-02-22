import { Component } from '@angular/core';
import { PRODUCTS } from './data/products.data';
import { Product } from './models/product.model';
import { ProductListComponent } from './components/product-list/product-list.component';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ProductListComponent],
  templateUrl: './app.component.html'
})

export class AppComponent {

  categories = [
    { id: 1, name: 'Phones' },
    { id: 2, name: 'Laptops' },
    { id: 3, name: 'headphones'},
    { id: 4, name: 'tabs'}
  ];

  products: Product[] = PRODUCTS;

  selectedCategoryId: number | null = null;

  selectCategory(id: number) {
    this.selectedCategoryId = id;
  }

  get filteredProducts(): Product[] {
    return this.products.filter(
      (p: Product) => p.categoryId === this.selectedCategoryId
    );
  }
}
