import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Category } from '../../models/category.model';
import { ProductService } from '../../services/product.service';
import { ProductListComponent } from '../product-list/product-list.component';

@Component({
  selector: 'app-category-list',
  standalone: true,
  imports: [CommonModule, ProductListComponent],
  templateUrl: './category-list.component.html'
})
export class CategoryListComponent {
  categories: Category[] = [];
  selectedCategoryId = 1;

  constructor(private productService: ProductService) {
    this.categories = this.productService.getCategories();
  }

  selectCategory(id: number): void {
    this.selectedCategoryId = id;
  }
}
